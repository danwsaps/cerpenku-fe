<script setup lang="ts">
import type {
    TooltipContentProps,
    TooltipTriggerProps,
} from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { TooltipContentVariants } from '.';
import {
    TooltipArrow,
    TooltipContent,
    TooltipPortal,
    TooltipProvider,
    TooltipRoot,
} from 'reka-ui';
import { tooltipArrowVariants, tooltipContentVariants } from '.';

export type TooltipVariant = 'danger' | 'default';

type Props = {
    as?: TooltipTriggerProps['as'];
    class?: HTMLAttributes['class'];
    type?: TooltipContentVariants['type'];
    rounded?: TooltipContentVariants['rounded'];
    position?: TooltipContentProps['side'];
    tooltip?: string;
    closeOnClick?: boolean;
    disableTeleport?: boolean;
};

const props = defineProps<Props>();
</script>

<template>
    <TooltipProvider
        :disable-closing-trigger="!closeOnClick"
        :delay-duration="100"
    >
        <TooltipRoot>
            <slot name="trigger">
                <VTooltipTrigger
                    :as="as"
                    :type="!as || as === 'button' ? 'button' : undefined"
                >
                    <slot />
                </VTooltipTrigger>
            </slot>
            <TooltipPortal :disabled="disableTeleport">
                <TooltipContent
                    v-bind="$attrs"
                    :class="cn(tooltipContentVariants({ rounded, type }), props.class)"
                >
                    {{ tooltip }}
                    <TooltipArrow
                        v-bind="props"
                        :class="cn(tooltipArrowVariants({ type }))"
                    />
                </TooltipContent>
            </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
</template>
