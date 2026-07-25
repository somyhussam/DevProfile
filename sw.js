self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {

    let data = {
        title: "اختبار",
        body: "وصل Push"
    };

    if (event.data) {
        data = event.data.json();
    }

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            requireInteraction: true
        })
    );
});
