import 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        __(key: string, params?: Record<string, any>): string;
    }
}
