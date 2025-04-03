import { toast } from 'vue-sonner';

export default defineNuxtPlugin((nuxtApp) => {
    const http = $fetch.create({
        onRequest({ options }) {
            useNuxtApp().$progress.start();
            options.headers.set('Content-Type', 'application/json');
            options.headers.set('Authorization', `Bearer ...`);
        },

        onResponse() {
            useNuxtApp().$progress.done();
        },

        async onRequestError({ request }) {
            console.error(request);
            await nuxtApp.runWithContext(() => navigateTo({ name: 'index' }));
        },

        async onResponseError({ response }) {
            console.error(response);

            if (response.status === 401) {
                await nuxtApp.runWithContext(
                    () => {
                        toast.error('Your session has expired. Please login again.');
                        return navigateTo('/login');
                    },
                );
            }
            else if (response.status === 403) {
                await nuxtApp.runWithContext(
                    () => toast.error('You are not authorized to perform this action!'),
                );
            }
            else {
                await nuxtApp.runWithContext(
                    () => toast.error('Something went wrong, please try again!'),
                );
            }
        },
    });

    return {
        provide: {
            http,
        },
    };
});
