<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    NavigationMenuTrigger,
    useForwardProps,
} from 'reka-ui';
import { navigationMenuTriggerStyle } from '.';

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <NavigationMenuTrigger
        v-bind="forwardedProps"
        :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
    >
        <slot />
        <NuxtIcon name="lucide:chevron-down" />
    </NavigationMenuTrigger>
</template>
