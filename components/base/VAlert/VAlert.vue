<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { AlertVariants } from '.';
import { alertVariants } from '.';

type Props = {
    class?: HTMLAttributes['class'];
    variant?: AlertVariants['variant'];
    withClose?: boolean;
};

const {
    withClose = true,
    ...props
} = defineProps<Props>();
</script>

<template>
    <div
        :class="cn(alertVariants({ variant }), props.class)"
        role="alert"
    >
        <div class="flex justify-between">
            <div class="flex gap-2">
                <slot name="icon" />
                <div>
                    <VAlertTitle>
                        <slot name="title" />
                    </VAlertTitle>
                    <VAlertDescription>
                        <slot name="description" />
                    </VAlertDescription>
                </div>
            </div>
            <VButton
                v-if="withClose"
                variant="ghost"
                size="icon"
            >
                <NuxtIcon name="lucide:x" />
            </VButton>
        </div>
    </div>
</template>
