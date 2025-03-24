<script setup lang="ts">
import type { AccordionTriggerProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    AccordionHeader,
    AccordionTrigger,
} from 'reka-ui';

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <AccordionHeader class="flex">
        <AccordionTrigger
            v-bind="delegatedProps"
            :class="
                cn(
                    'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>span]:rotate-180',
                    props.class,
                )
            "
        >
            <slot />
            <slot name="icon">
                <NuxtIcon
                    name="lucide:chevron-down"
                    class="transition-transform duration-200"
                />
            </slot>
        </AccordionTrigger>
    </AccordionHeader>
</template>
