export default defineNuxtRouteMiddleware(() => {
    useNuxtApp().$progress.start();
    nextTick(() => {
        useNuxtApp().$progress.done();
    });
});
