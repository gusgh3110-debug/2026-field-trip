/* =========================================================================
   common.js — 학생용/관리자용 화면이 함께 쓰는 데이터 로딩·저장 로직
   ========================================================================= */

var TRIP_OVERRIDE_KEY = "happyDaedream_dataOverride_v1";
var TRIP_ADMIN_UNLOCKED_KEY = "happyDaedream_adminUnlocked";

// 관리자 코드 — 학교 상황에 맞게 바꿔서 사용하세요 (간단한 화면 잠금용이며,
// 강력한 보안 장치는 아닙니다. 민감한 개인정보는 이 화면에 넣지 마세요.)
var TRIP_ADMIN_CODE = "0909";

/**
 * 현재 사용할 데이터를 반환합니다.
 * 관리자가 "이 브라우저에 미리보기 저장"을 한 적이 있으면 그 값을,
 * 없으면 data.js의 기본값(TRIP_DATA_DEFAULT)을 사용합니다.
 */
/**
 * localStorage를 사용할 수 없는 환경(샌드박스 미리보기, 시크릿 모드 등)에서도
 * 화면이 멈추지 않도록 감싼 안전한 저장소 함수들.
 * 실패하면 메모리에만 저장되어(새로고침하면 사라짐) 최소한 화면은 정상 작동합니다.
 */
var _tripMemoryStore = {};
function _safeStorageGet(key) {
  try { return window.localStorage.getItem(key); }
  catch (e) { return Object.prototype.hasOwnProperty.call(_tripMemoryStore, key) ? _tripMemoryStore[key] : null; }
}
function _safeStorageSet(key, value) {
  try { window.localStorage.setItem(key, value); }
  catch (e) { _tripMemoryStore[key] = value; }
}
function _safeStorageRemove(key) {
  try { window.localStorage.removeItem(key); }
  catch (e) { delete _tripMemoryStore[key]; }
}
function _safeSessionGet(key) {
  try { return window.sessionStorage.getItem(key); }
  catch (e) { const k = "s:" + key; return Object.prototype.hasOwnProperty.call(_tripMemoryStore, k) ? _tripMemoryStore[k] : null; }
}
function _safeSessionSet(key, value) {
  try { window.sessionStorage.setItem(key, value); }
  catch (e) { _tripMemoryStore["s:" + key] = value; }
}
function _safeSessionRemove(key) {
  try { window.sessionStorage.removeItem(key); }
  catch (e) { delete _tripMemoryStore["s:" + key]; }
}

function loadTripData() {
  try {
    const raw = _safeStorageGet(TRIP_OVERRIDE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.tripDays) return parsed;
    }
  } catch (e) { /* ignore malformed override */ }
  // 깊은 복사로 반환해 원본 기본값이 실수로 변형되지 않도록 함
  return JSON.parse(JSON.stringify(window.TRIP_DATA_DEFAULT));
}

/** 이 브라우저에만 임시로 반영되는 미리보기 저장 */
function saveTripOverride(data) {
  _safeStorageSet(TRIP_OVERRIDE_KEY, JSON.stringify(data));
}

/** 미리보기 초기화 → data.js 기본값으로 되돌림 */
function clearTripOverride() {
  _safeStorageRemove(TRIP_OVERRIDE_KEY);
}

function hasTripOverride() {
  try { return !!_safeStorageGet(TRIP_OVERRIDE_KEY); } catch (e) { return false; }
}

/**
 * 관리자가 편집한 데이터를 data.js 파일 형식의 텍스트로 변환합니다.
 * 이 내용을 다운로드해서 서버의 data.js를 교체하면 모든 학생에게 반영됩니다.
 */
function exportTripDataAsFile(data) {
  const json = JSON.stringify(data, null, 2);
  const content =
`/* =========================================================================
   data.js — 「2026 행복다드림 수학여행」 데이터
   관리자 화면에서 내보낸 파일입니다. (${new Date().toLocaleString("ko-KR")})
   이 파일로 기존 data.js를 교체한 뒤 다시 업로드(배포)하면
   모든 학생 화면에 반영됩니다.
   ========================================================================= */

window.TRIP_DATA_DEFAULT = ${json};
`;
  const blob = new Blob([content], { type: "text/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.js";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
