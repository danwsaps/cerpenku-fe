<script setup lang="ts">
import type { ScrollAreaRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    ScrollAreaCorner,
    ScrollAreaRoot,
    ScrollAreaViewport,
} from 'reka-ui';

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ScrollAreaRoot
        v-bind="delegatedProps"
        :class="cn('relative overflow-hidden', props.class)"
    >
        <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
            <slot />
        </ScrollAreaViewport>
        <VScrollBar />
        <ScrollAreaCorner />
    </ScrollAreaRoot>
</template>
