import * as id from 'uuid';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            id,
        },
    };
});
