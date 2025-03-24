<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'reka-ui';
import { DialogRoot, useForwardPropsEmits } from 'reka-ui';

type Props = {
    title?: string;
    description?: string;
    withTemplate?: boolean;
};
const {
    title = '',
    description = '',
    withTemplate = true,
    ...props
} = defineProps<DialogRootProps & Props>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <DialogRoot v-bind="forwarded">
        <template v-if="withTemplate">
            <VDialogTrigger as-child>
                <slot name="trigger" />
            </VDialogTrigger>
            <VDialogScrollContent class="grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
                <VDialogHeader class="p-6 pb-0">
                    <VDialogTitle>{{ title }}</VDialogTitle>
                    <VDialogDescription>{{ description }}</VDialogDescription>
                </VDialogHeader>
                <div class="grid gap-4 py-4 overflow-y-auto px-6">
                    <slot />
                </div>
                <VDialogFooter class="p-6 pt-0">
                    <slot name="footer" />
                </VDialogFooter>
            </VDialogScrollContent>
        </template>

        <template v-else>
            <slot />
        </template>
    </DialogRoot>
</template>
