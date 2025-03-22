import { v4, v7 } from 'uuid';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            uuidv4: () => v4(),
            uuidv7: () => v7(),
        },
    };
});
