<script setup lang="ts">
import type { ComboboxAnchorProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { ComboboxAnchor, useForwardProps } from 'reka-ui';

const props = defineProps<ComboboxAnchorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
    <ComboboxAnchor
        v-bind="forwarded"
        :class="cn('w-[200px]', props.class)"
    >
        <slot />
    </ComboboxAnchor>
</template>
