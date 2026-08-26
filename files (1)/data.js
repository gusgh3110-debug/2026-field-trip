/* =========================================================================
   data.js — 「2026 행복다드림 수학여행」 기본 데이터
   -------------------------------------------------------------------------
   이 파일이 학생용 화면(index.html)에 나오는 모든 내용의 "원본"입니다.
   교사용 관리자 화면(admin.html)에서 내용을 수정한 뒤 "내보내기" 버튼을
   누르면 이 파일과 같은 형식의 새 data.js가 다운로드됩니다.
   그 파일로 이 자리의 data.js를 교체하고 다시 업로드(배포)하면
   모든 학생 화면에 반영됩니다.

   ⚠️ 관리자 화면에서 "미리보기 저장"만 누른 경우에는 그 브라우저에만
      임시로 반영됩니다. 실제 학생들에게 반영하려면 반드시
      "data.js 내보내기"로 파일을 받아 서버에 다시 올려주세요.
   ========================================================================= */

window.TRIP_DATA_DEFAULT = {

  schoolName: "[학교명]",

  // 일정표 하단 안내 문구
  scheduleNote: "※ 일정 및 예정 시간은 동선이나 상황에 따라 변동될 수 있음.",

  tripDays: [
    { id: 1, label: "1일차", date: "2026-09-09", title: "서울 이동 · 국립중앙박물관 · 연극 관람" },
    { id: 2, label: "2일차", date: "2026-09-10", title: "롯데월드 · 롯데타워 전망대" },
    { id: 3, label: "3일차", date: "2026-09-11", title: "경복궁 견학 · 귀가" }
  ],

  // 각 일정: time(시작) / endTime(종료) / title / place / transport / note
  schedules: {
    1: [
      { time: "08:00", endTime: "08:30", title: "학교 집결, 출발", place: "학교", transport: "-", note: "출석 확인 후 출발합니다." },
      { time: "08:30", endTime: "13:00", title: "이동", place: "서울", transport: "장성 → 서울, 휴게소 2회", note: "" },
      { time: "13:00", endTime: "14:00", title: "점심식사", place: "두래돈가스", transport: "-", note: "" },
      { time: "14:00", endTime: "16:00", title: "국립중앙박물관 견학", place: "국립중앙박물관", transport: "-", note: "HedgeHunt 미션을 조원과 함께 수행하세요." },
      { time: "16:00", endTime: "16:40", title: "이동", place: "대학로", transport: "국립중앙박물관 → 대학로", note: "" },
      { time: "16:40", endTime: "18:30", title: "연극 관람", place: "JS아트홀", transport: "-", note: "" },
      { time: "18:30", endTime: "19:30", title: "저녁 식사", place: "조선식당(제육쌈밥)", transport: "-", note: "" },
      { time: "19:30", endTime: "20:40", title: "이동", place: "숙소", transport: "대학로 → 숙소", note: "" },
      { time: "20:40", endTime: "21:00", title: "체크인 및 짐정리", place: "로사나부티크 호텔", transport: "-", note: "" },
      { time: "21:00", endTime: "22:00", title: "세면 및 취침 준비", place: "로사나부티크 호텔", transport: "-", note: "" },
      { time: "22:00", endTime: "23:59", title: "점호 및 취침", place: "로사나부티크 호텔", transport: "-", note: "" }
    ],
    2: [
      { time: "07:00", endTime: "08:20", title: "기상 및 아침식사", place: "호텔 조식", transport: "-", note: "" },
      { time: "08:20", endTime: "08:40", title: "이동", place: "롯데월드", transport: "숙소 → 롯데월드", note: "" },
      { time: "08:40", endTime: "12:00", title: "롯데월드 어드벤처", place: "롯데월드", transport: "-", note: "" },
      { time: "12:00", endTime: "13:00", title: "점심 식사", place: "롯데리아", transport: "-", note: "" },
      { time: "13:00", endTime: "17:00", title: "롯데월드 어드벤처", place: "롯데월드", transport: "-", note: "" },
      { time: "17:00", endTime: "17:15", title: "이동", place: "식당", transport: "롯데월드 → 식당", note: "" },
      { time: "17:15", endTime: "18:15", title: "저녁 식사", place: "마노다세프(양식)", transport: "-", note: "" },
      { time: "18:15", endTime: "18:30", title: "이동", place: "롯데타워", transport: "식당 → 롯데타워", note: "" },
      { time: "18:30", endTime: "19:30", title: "롯데타워 전망대 관람", place: "서울스카이", transport: "-", note: "" },
      { time: "19:30", endTime: "20:00", title: "이동", place: "숙소", transport: "롯데타워 → 숙소", note: "" },
      { time: "20:00", endTime: "22:00", title: "세면 및 취침 준비", place: "로사나부티크 호텔", transport: "-", note: "" },
      { time: "22:00", endTime: "23:59", title: "취침", place: "로사나부티크 호텔", transport: "-", note: "야간 학생 안전지도" }
    ],
    3: [
      { time: "07:00", endTime: "08:00", title: "기상 및 아침식사", place: "호텔 조식", transport: "-", note: "" },
      { time: "08:00", endTime: "09:00", title: "이동", place: "경복궁", transport: "숙소 → 경복궁", note: "" },
      { time: "09:00", endTime: "11:00", title: "경복궁 견학", place: "경복궁", transport: "-", note: "HedgeHunt 미션을 조원과 함께 수행하세요." },
      { time: "11:00", endTime: "11:20", title: "이동", place: "식당", transport: "경복궁 → 식당", note: "" },
      { time: "11:20", endTime: "12:20", title: "점심식사", place: "테이크 종각점(뷔페)", transport: "-", note: "" },
      { time: "12:20", endTime: "17:00", title: "이동", place: "학교", transport: "경복궁 → 학교, 휴게소 1회", note: "" },
      { time: "17:00", endTime: "17:30", title: "귀가", place: "학교", transport: "-", note: "보호자님께 인계 후 귀가합니다." }
    ]
  },

  notices: [
    { id: 1, title: "[중요] 08:20까지 호텔 로비로 모이세요.", body: "2일차 아침, 짐을 모두 챙겨 08:20까지 숙소 로비로 집결해주세요.", time: "2026-09-09 20:10", important: true },
    { id: 2, title: "[중요] 출발 20분 전까지 학교로 오세요.", body: "1일차 버스는 08:00 출발입니다. 늦지 않도록 학교에 미리 도착해주세요.", time: "2026-09-08 09:15", important: true },
    { id: 3, title: "우천 시 일정 안내", body: "비가 올 경우 실외 일정 일부가 실내 프로그램으로 변경될 수 있습니다. 우산을 챙겨주세요.", time: "2026-09-07 18:00", important: false }
  ],

  meetingPoints: {
    1: [
      { name: "학교", time: "08:00", note: "출석 확인 후 출발합니다.", mapUrl: "" },
      { name: "국립중앙박물관", time: "14:00", note: "정문 앞 집결", mapUrl: "" },
      { name: "JS아트홀 (대학로)", time: "16:40", note: "공연 관람 전 집결", mapUrl: "" },
      { name: "로사나부티크 호텔", time: "20:40", note: "체크인 및 짐 정리", mapUrl: "" }
    ],
    2: [
      { name: "로사나부티크 호텔 로비", time: "08:20", note: "조식 후 집결", mapUrl: "" },
      { name: "롯데월드 정문", time: "08:40", note: "입장 전 집결", mapUrl: "" },
      { name: "서울스카이 (롯데타워)", time: "18:30", note: "전망대 관람 전 집결", mapUrl: "" },
      { name: "로사나부티크 호텔", time: "20:00", note: "세면 및 취침 준비", mapUrl: "" }
    ],
    3: [
      { name: "로사나부티크 호텔 로비", time: "08:00", note: "짐을 모두 챙겨 내려오세요.", mapUrl: "" },
      { name: "경복궁", time: "09:00", note: "정문 앞 집결", mapUrl: "" },
      { name: "학교", time: "17:00", note: "보호자님께 인계 후 해산합니다.", mapUrl: "" }
    ]
  },

  emergencyContacts: [
    { label: "인솔교사 (담임 선생님)", phone: "010-0000-0000" },
    { label: "학교 행정실", phone: "061-000-0000" },
    { label: "숙소 프런트 (로사나부티크 호텔)", phone: "02-000-0000" }
  ],

  safetyRules: [
    "조원과 항상 함께 다니기",
    "선생님이 보이는 곳에서만 이동하기",
    "위험한 장난이나 뛰어다니기 금지",
    "낯선 사람을 따라가지 않기",
    "다치거나 아프면 바로 선생님께 알리기",
    "물건을 잃어버리면 당황하지 말고 선생님께 알리기"
  ],

  // HedgeHunt 미션 링크 — 준비되면 이 값만 채워주세요. 비어 있으면 "준비 중"으로 표시됩니다.
  missionLinks: {
    museum: "",        // 국립중앙박물관 HedgeHunt URL
    gyeongbokgung: ""  // 경복궁 HedgeHunt URL
  },

  lotteWorld: {
    entryTime: "08:40",
    freeTimeEnd: "17:00",
    meetingTime: "17:00",
    meetingPlace: "롯데월드 정문",
    safetyRules: [
      "키 제한이 있는 놀이기구는 안내를 꼭 확인하세요.",
      "탑승 중에는 안전벨트·안전바를 반드시 착용해요.",
      "혼자 다니지 말고 조원과 함께 이동해요.",
      "몸이 안 좋으면 놀이기구를 타지 말고 선생님께 알려주세요."
    ],
    lostAndFound: "물건을 잃어버리면 정문 안내데스크 또는 인솔교사에게 바로 알려주세요."
  },

  // 사진 갤러리 (교사가 등록) — url을 채우면 실제 사진이 표시됩니다.
  photos: {
    1: [
      { place: "국립중앙박물관", url: "" },
      { place: "연극 관람", url: "" }
    ],
    2: [
      { place: "롯데월드", url: "" },
      { place: "롯데타워 서울스카이", url: "" }
    ],
    3: [
      { place: "경복궁", url: "" }
    ]
  }
};
