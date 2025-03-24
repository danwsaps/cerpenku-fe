<script setup lang="ts">
import type { ProgressRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    ProgressIndicator,
    ProgressRoot,

} from 'reka-ui';

const props = withDefaults(
    defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
    {
        modelValue: 0,
    },
);

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ProgressRoot
        v-bind="delegatedProps"
        :class="
            cn(
                'relative h-2 w-full overflow-hidden rounded-full bg-neutral-900/20 dark:bg-neutral-50/20',
                props.class,
            )
        "
    >
        <ProgressIndicator
            class="h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-50"
            :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
        />
    </ProgressRoot>
</template>
