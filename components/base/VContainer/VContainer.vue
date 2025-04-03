<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

type Props = {
    as?: HTMLElementTagNameMap['div'] | HTMLElementTagNameMap['section'];
    class?: HTMLAttributes['class'];
};
const {
    as = 'section',
    ...props
} = defineProps<Props>();
</script>

<template>
    <component
        :is="as"
        :class="cn('container py-8', props.class)"
    >
        <slot />
    </component>
</template>
