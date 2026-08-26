// 2026 행복다드림 수학여행 - Service Worker
// 오프라인에서도 일정 · 안전수칙 · 집결장소(정적 데이터)를 볼 수 있도록 앱 셸을 캐싱합니다.
// HedgeHunt 미션 링크는 캐싱하지 않습니다 (인터넷 연결 필요).

const CACHE_NAME = 'happy-daedream-trip-v2';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './common.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 같은 출처의 GET 요청만 캐시 우선 처리. 외부 링크(HedgeHunt, 지도 등)는 그대로 네트워크로 보냄.
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
