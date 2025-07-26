export default {
    methods: {
        __(key, params = {}) {
            return this.$t(key, params);
        },
    },
};
