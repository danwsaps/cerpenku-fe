<script setup lang="ts">
import type { TagsInputItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { TagsInputItem, useForwardProps } from 'reka-ui';

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TagsInputItem
        v-bind="forwardedProps"
        :class="cn('flex h-5 items-center rounded-md bg-neutral-100 data-[state=active]:ring-neutral-950 data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-white dark:bg-neutral-800 dark:data-[state=active]:ring-neutral-300 dark:ring-offset-neutral-950', props.class)"
    >
        <slot />
    </TagsInputItem>
</template>
