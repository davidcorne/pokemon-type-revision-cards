const CACHE_NAME = 'pokemon-rev-cache-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache all static assets
      return cache.addAll([
  "/favicon.svg",
  "/icons/skip.svg",
  "/icons/tick.svg",
  "/icons.svg",
  "/manifest.json",
  "/pwa-192x192.svg",
  "/service-worker.js",
  "/types/bug.svg",
  "/types/dark.svg",
  "/types/dragon.svg",
  "/types/electric.svg",
  "/types/fairy.svg",
  "/types/fighting.svg",
  "/types/fire.svg",
  "/types/flying.svg",
  "/types/ghost.svg",
  "/types/grass.svg",
  "/types/ground.svg",
  "/types/ice.svg",
  "/types/normal.svg",
  "/types/poison.svg",
  "/types/psychic.svg",
  "/types/rock.svg",
  "/types/steel.svg",
  "/types/water.svg"
])
    }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      )
    }),
  )
})

self.addEventListener('fetch', (event) => {
  // Only handle GET requests.
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached
      return fetch(event.request).then((response) => {
        // Only cache successful responses.
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }
        const clone = response.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
        return response
      }).catch(() => {
        // If fetch fails (e.g., offline), return the cached index.html as a fallback
        return caches.match('/index.html')
      })
    }),
  )
})
