import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        __(key: string, params = {}) {
            return (this as any).$t(key, params);
        },
    },
});
