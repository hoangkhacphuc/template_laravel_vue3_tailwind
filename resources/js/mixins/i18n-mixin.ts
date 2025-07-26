export default {
    methods: {
        __(key: string, params = {}) {
            return (this as any).$t(key, params);
        },
    },
};
