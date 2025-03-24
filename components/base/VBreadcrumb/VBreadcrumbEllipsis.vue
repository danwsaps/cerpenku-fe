<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span
        role="presentation"
        aria-hidden="true"
        :class="cn('flex h-9 w-9 items-center justify-center', props.class)"
    >
        <slot>
            <NuxtIcon name="lucide:ellipsis" />
        </slot>
        <span class="sr-only">More</span>
    </span>
</template>
