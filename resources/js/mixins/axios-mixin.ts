import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content');
if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
}

export default {
    methods: {
        async $get(url: string, params: object = {}, config: object = {}) {
            try {
                const response = await axios.get(url, { params, ...config });
                return response.data;
            } catch (error) {
                this.$handleHttpError(error);
                throw error;
            }
        },

        async $post(url: string, data = {}, config = {}) {
            try {
                const response = await axios.post(url, data, config);
                return response.data;
            } catch (error) {
                this.$handleHttpError(error);
                throw error;
            }
        },

        async $put(url: string, data = {}, config = {}) {
            try {
                const response = await axios.put(url, data, config);
                return response.data;
            } catch (error) {
                this.$handleHttpError(error);
                throw error;
            }
        },

        async $delete(url: string, config = {}) {
            try {
                const response = await axios.delete(url, config);
                return response.data;
            } catch (error) {
                this.$handleHttpError(error);
                throw error;
            }
        },

        $handleHttpError(error: any) {
            if (error.response) {
                console.error(
                    'HTTP Error:',
                    error.response.status,
                    error.response.data
                );
            } else if (error.request) {
                console.error('No response from server:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        },
    },
};
