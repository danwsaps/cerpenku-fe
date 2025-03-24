<script setup lang="ts">
import type { DrawerPortalProps } from 'vaul-vue';
import type { HTMLAttributes } from 'vue';
import { DrawerPortal } from 'vaul-vue';

const props = defineProps<DrawerPortalProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DrawerPortal v-bind="delegatedProps">
        <slot />
    </DrawerPortal>
</template>
