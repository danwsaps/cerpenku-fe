<script setup lang="ts">
import type { MenubarTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { MenubarTrigger, useForwardProps } from 'reka-ui';

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <MenubarTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-50',
                props.class,
            )
        "
    >
        <slot />
    </MenubarTrigger>
</template>
