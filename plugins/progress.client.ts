import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default defineNuxtPlugin(() => {
    if (import.meta.server)
        return;
    return {
        provide: {
            progress: nProgress,
        },
    };
});
