<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { AvatarVariants } from '.';
import { AvatarRoot } from 'reka-ui';
import { avatarVariant } from '.';

type Props = {
    src: string;
    alt: string;
    fallback: string;
    size?: AvatarVariants['size'];
    shape?: AvatarVariants['shape'];
    class?: HTMLAttributes['class'];
};

const {
    size = 'sm',
    shape = 'circle',
    ...props
} = defineProps<Props>();
</script>

<template>
    <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
        <VAvatarImage
            :src="src"
            :alt="alt"
        />
        <VAvatarFallback>{{ fallback }}</VAvatarFallback>
    </AvatarRoot>
</template>
