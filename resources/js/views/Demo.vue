<template>
    <div
        class="w-full h-full flex flex-col gap-[50px] items-center justify-center">
        <h1
            class="text-white text-[35px] font-bold select-none text-center p-4">
            <p>{{ __('demo_page') }}</p>
        </h1>
        <router-link
            to="/"
            class="w-[250px] h-[70px] text-white rounded-[12px] border-[1px] text-sm flex items-center justify-center cursor-pointer select-none"
            >Go to Index</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            // You can add any data properties here if needed
        };
    },
    methods: {
        // You can add any methods here if needed
        example(url) {
            return this.$get(url)
                .then(response => response.data)
                .catch(error => {
                    console.error("API Error:", error);
                    throw error;
                });
        }
    },
};
</script>
