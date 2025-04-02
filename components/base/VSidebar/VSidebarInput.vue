<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <VInput
        name="sidebar-input"
        data-sidebar="input"
        :class="cn(
            'h-8 w-full bg-white shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring dark:bg-neutral-950',
            props.class,
        )"
    >
        <slot />
    </VInput>
</template>
