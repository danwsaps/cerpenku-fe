<script setup lang="ts">
import type { MenubarCheckboxItemEmits, MenubarCheckboxItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    MenubarCheckboxItem,
    MenubarItemIndicator,
    useForwardPropsEmits,
} from 'reka-ui';

const props = defineProps<MenubarCheckboxItemProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<MenubarCheckboxItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <MenubarCheckboxItem
        v-bind="forwarded"
        :class="cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
            props.class,
        )"
    >
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarItemIndicator>
                <NuxtIcon name="lucide:check" />
            </MenubarItemIndicator>
        </span>
        <slot />
    </MenubarCheckboxItem>
</template>
