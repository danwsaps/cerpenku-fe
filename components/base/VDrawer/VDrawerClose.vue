<script setup lang="ts">
import type { DrawerCloseProps } from 'vaul-vue';
import type { HTMLAttributes } from 'vue';
import { DrawerClose } from 'vaul-vue';

const props = defineProps<DrawerCloseProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DrawerClose v-bind="delegatedProps">
        <slot />
    </DrawerClose>
</template>
