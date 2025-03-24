<script lang="ts" setup>
type Props = {
    title?: string;
    description?: string;
};

const {
    title = 'Are you absolutely sure?',
    description = 'This action is permanent and can not be undone. Make sure that you are prepared for this.',
} = defineProps<Props>();

const emits = defineEmits<{
    proceed: [];
}>();
</script>

<template>
    <VAlertDialog>
        <VAlertDialogTrigger as-child>
            <slot name="trigger" />
        </VAlertDialogTrigger>
        <VAlertDialogContent>
            <VAlertDialogHeader>
                <VAlertDialogTitle>{{ title }}</VAlertDialogTitle>
                <VAlertDialogDescription>
                    {{ description }}
                </VAlertDialogDescription>
            </VAlertDialogHeader>
            <VAlertDialogFooter>
                <VAlertDialogCancel>Cancel</VAlertDialogCancel>
                <VAlertDialogAction @click="emits('proceed')">
                    Continue
                </VAlertDialogAction>
            </VAlertDialogFooter>
        </VAlertDialogContent>
    </VAlertDialog>
</template>
