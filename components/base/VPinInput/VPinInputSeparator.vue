<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui';
import { Primitive, useForwardProps } from 'reka-ui';

const props = defineProps<PrimitiveProps>();
const forwardedProps = useForwardProps(props);
</script>

<template>
    <Primitive v-bind="forwardedProps">
        <slot>
            <NuxtIcon name="lucide:minus" />
        </slot>
    </primitive>
</template>
