import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, 'public')
const swTemplate = `const CACHE_NAME = 'pokemon-rev-cache-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache all static assets
      return cache.addAll(ASSETS_TO_CACHE)
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
`

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
    } else {
      // Add leading slash for cache
      const relativePath = '/' + path.relative(publicDir, fullPath).replace(/\\/g, '/')
      arrayOfFiles.push(relativePath)
    }
  })

  return arrayOfFiles
}

const assets = getAllFiles(publicDir)
const assetsString = JSON.stringify(assets, null, 2)

const swContent = swTemplate.replace('ASSETS_TO_CACHE', assetsString)

fs.writeFileSync(path.join(publicDir, 'service-worker.js'), swContent)

console.log('Service worker generated with assets:', assets)
