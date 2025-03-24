<script setup lang="ts">
import type { RadioGroupItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    RadioGroupIndicator,
    RadioGroupItem,
    useForwardProps,
} from 'reka-ui';

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadioGroupItem
        v-bind="forwardedProps"
        :class="
            cn(
                'peer aspect-square h-4 w-4 rounded-full border border-neutral-900 text-neutral-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-50 dark:text-neutral-50 dark:focus-visible:ring-neutral-300',
                props.class,
            )
        "
    >
        <RadioGroupIndicator class="flex items-center justify-center">
            <NuxtIcon name="lucide:check" />
        </RadioGroupIndicator>
    </RadioGroupItem>
</template>
