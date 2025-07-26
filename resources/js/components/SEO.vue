<script setup>
    import { useHead } from '@vueuse/head';
    import Logo from '@images/logo.png';
    const baseURL = import.meta.env.VITE_APP_URL;

    useHead({
        title: 'Page Not Found',
        meta: [
            {
                property: 'og:title',
                content: 'Page Not Found',
            },
            {
                name: 'og:description',
                content: "It seems like you've accessed the wrong page",
            },
            {
                property: 'og:image',
                content: baseURL + Logo,
            },
        ],
    });
</script>

<template></template>
