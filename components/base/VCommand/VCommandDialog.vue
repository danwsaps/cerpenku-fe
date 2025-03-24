<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'reka-ui';
import { useForwardPropsEmits } from 'reka-ui';

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <VDialog
        v-bind="forwarded"
        :with-template="false"
    >
        <VDialogContent class="overflow-hidden p-0 shadow-lg">
            <VCommand class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-neutral-400">
                <slot />
            </VCommand>
        </VDialogContent>
    </VDialog>
</template>
