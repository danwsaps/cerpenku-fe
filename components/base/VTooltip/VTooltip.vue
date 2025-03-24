<script setup lang="ts">
import type { TooltipRootEmits, TooltipRootProps } from 'reka-ui';
import { TooltipRoot, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<TooltipRootProps>();
const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <VTooltipProvider>
        <TooltipRoot v-bind="forwarded">
            <VTooltipTrigger as-child>
                <slot name="trigger" />
            </VTooltipTrigger>
            <VTooltipContent>
                <slot name="content" />
            </VTooltipContent>
        </TooltipRoot>
    </VTooltipProvider>
</template>
