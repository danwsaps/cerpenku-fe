<script lang="ts" setup>
import 'nprogress/nprogress.css';
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
        <VToast />
    </ClientOnly>
</template>

<style lang="scss">
#nprogress {
    .bar {
        background: #6366f1 !important;
        padding: 0 5px !important;
        height: 4px !important;
    }

    .spinner {
        .spinner-icon {
            border-top-color: #6366f1 !important;
            border-left-color: #6366f1 !important;
        }
    }
}
</style>
