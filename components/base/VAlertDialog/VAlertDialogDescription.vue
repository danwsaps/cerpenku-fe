<script setup lang="ts">
import type { AlertDialogDescriptionProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { AlertDialogDescription } from 'reka-ui';

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <AlertDialogDescription
        v-bind="delegatedProps"
        :class="cn('text-sm text-neutral-500 dark:text-neutral-400', props.class)"
    >
        <slot />
    </AlertDialogDescription>
</template>
