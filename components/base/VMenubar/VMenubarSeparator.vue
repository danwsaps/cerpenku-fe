<script setup lang="ts">
import type { MenubarSeparatorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { MenubarSeparator, useForwardProps } from 'reka-ui';

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <MenubarSeparator
        :class=" cn('-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800', props.class)"
        v-bind="forwardedProps"
    />
</template>
