<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
    window.addEventListener("vite:preloadError", (event) => {
        event.preventDefault();
        window.location.reload();
    });
});
</script>

<template>
    <component :is="router.currentRoute.value.meta.layout">
        <router-view />
    </component>
</template>
