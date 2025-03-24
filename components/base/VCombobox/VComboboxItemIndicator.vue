<script setup lang="ts">
import type { ComboboxItemIndicatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { ComboboxItemIndicator } from 'reka-ui';

const props = defineProps<ComboboxItemIndicatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxItemIndicator v-bind="delegatedProps">
        <slot />
    </ComboboxItemIndicator>
</template>
