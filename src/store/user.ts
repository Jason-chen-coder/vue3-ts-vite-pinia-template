import { defineStore } from 'pinia';

export default defineStore({
    id: 'user',
    state: () => {
        return {
            name: 'jason',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
