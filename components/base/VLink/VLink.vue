<script lang="ts" setup>
import type { NuxtLinkProps } from '#app';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '../VButton';

type ButtonProps = {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    block?: boolean;
    class?: HTMLAttributes['class'];
};

const props = defineProps<ButtonProps & NuxtLinkProps>();

const linkProps = computed(() => {
    const {
        variant,
        size,
        block,
        class: className,
        ...nuxtLinkAttrs
    } = props;
    return nuxtLinkAttrs;
});
</script>

<template>
    <VButton
        :variant="variant"
        :size="size"
        :block="block"
        as-child
    >
        <NuxtLink v-bind="linkProps">
            <slot />
        </NuxtLink>
    </VButton>
</template>
