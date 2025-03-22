import * as yup from 'yup';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            yup,
        },
    };
});
