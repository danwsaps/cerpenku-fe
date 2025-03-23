<script setup lang="ts">
import type { Props } from '.';
import { Primitive } from 'reka-ui';
import { buttonVariants } from '.';

const {
    as = 'button',
    type = 'button',
    ...props
} = defineProps<Props>();
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size }), props.class)"
        :type="type"
    >
        <slot />
    </Primitive>
</template>
