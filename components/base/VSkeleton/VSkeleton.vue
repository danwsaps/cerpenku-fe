<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

type SkeletonProps = {
    class?: HTMLAttributes['class'];
};

const props = defineProps<SkeletonProps>();
</script>

<template>
    <div :class="cn('animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10 h-5', props.class)" />
</template>
