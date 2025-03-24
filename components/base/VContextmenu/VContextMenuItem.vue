<script setup lang="ts">
import type { ContextMenuItemEmits, ContextMenuItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    ContextMenuItem,

    useForwardPropsEmits,
} from 'reka-ui';

const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }>();
const emits = defineEmits<ContextMenuItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuItem
        v-bind="forwarded"
        :class="cn(
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
            inset && 'pl-8',
            props.class,
        )"
    >
        <slot />
    </ContextMenuItem>
</template>
