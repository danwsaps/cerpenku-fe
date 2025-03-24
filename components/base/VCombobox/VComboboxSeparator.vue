<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { ComboboxSeparator } from 'reka-ui';

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxSeparator
        v-bind="delegatedProps"
        :class="cn('-mx-1 h-px bg-neutral-200 dark:bg-neutral-800', props.class)"
    >
        <slot />
    </ComboboxSeparator>
</template>
