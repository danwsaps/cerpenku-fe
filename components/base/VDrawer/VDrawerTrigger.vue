<script setup lang="ts">
import type { DrawerTriggerProps } from 'vaul-vue';
import type { HTMLAttributes } from 'vue';
import { DrawerTrigger } from 'vaul-vue';

const props = defineProps<DrawerTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DrawerTrigger v-bind="delegatedProps">
        <slot />
    </DrawerTrigger>
</template>
