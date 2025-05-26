const CACHE_NAME = 'mistria-guia-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'estacoes.html',
    'museu.html',
    'moradores.html',
    'css/style.css',
    'js/script.js'
    // Adicione aqui outros arquivos importantes, como imagens principais
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});