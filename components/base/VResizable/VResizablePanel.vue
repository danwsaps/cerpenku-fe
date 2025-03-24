<script setup lang="ts">
import type { SplitterPanelProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { SplitterPanel } from 'reka-ui';

const props = defineProps<SplitterPanelProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <SplitterPanel
        v-bind="delegatedProps"
        :class="cn(props.class)"
    >
        <slot />
    </SplitterPanel>
</template>
