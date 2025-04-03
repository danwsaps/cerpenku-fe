export default defineNuxtRouteMiddleware(() => {
    if (import.meta.client) {
        useNuxtApp().$progress.start();
        nextTick(() => {
            useNuxtApp().$progress.done();
        });
    }
});
