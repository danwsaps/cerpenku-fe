<script setup lang="ts">
import type { DropdownMenuPortalProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { DropdownMenuPortal } from 'reka-ui';

const props = defineProps<DropdownMenuPortalProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DropdownMenuPortal v-bind="delegatedProps">
        <slot />
    </DropdownMenuPortal>
</template>
