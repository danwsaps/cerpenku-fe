<script setup lang="ts">
import type { PopoverAnchorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { PopoverAnchor } from 'reka-ui';

const props = defineProps<PopoverAnchorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <PopoverAnchor
        v-bind="delegatedProps"
        :class="cn(props.class)"
    >
        <slot />
    </PopoverAnchor>
</template>
