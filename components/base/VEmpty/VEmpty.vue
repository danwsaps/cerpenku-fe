<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

type Props = {
    class?: HTMLAttributes['class'];
    title?: string;
    text?: string;
};
const props = defineProps<Props>();

const title = computed(() => props.title ?? 'No results found');
const text = computed(() => props.text ?? 'Start by creating new data');
</script>

<template>
    <div :class="cn('relative text-center w-full', props.class)">
        <slot name="icon">
            <NuxtIcon name="lucide:package" />
        </slot>
        <h3 :class="cn('mt-2 text-sm font-normal text-muted-800 dark:text-muted-100')">
            <slot name="title">
                {{ title }}
            </slot>
        </h3>
        <p
            v-if="$slots.text || text"
            :class="cn('mt-0.5 text-sm text-muted-400')"
        >
            <slot name="text">
                {{ text }}
            </slot>
        </p>
    </div>
</template>
