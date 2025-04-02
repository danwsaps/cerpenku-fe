<script setup lang="ts">
import type { MenubarRootEmits, MenubarRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    MenubarRoot,
    useForwardPropsEmits,
} from 'reka-ui';

const props = defineProps<MenubarRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<MenubarRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <MenubarRoot
        v-bind="forwarded"
        :class="
            cn(
                'flex h-9 items-center space-x-1 rounded-md border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-800 dark:bg-neutral-950',
                props.class,
            )
        "
    >
        <slot />
    </MenubarRoot>
</template>
