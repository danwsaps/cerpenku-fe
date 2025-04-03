import nProgress from 'nprogress';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            progress: nProgress,
        },
    };
});
