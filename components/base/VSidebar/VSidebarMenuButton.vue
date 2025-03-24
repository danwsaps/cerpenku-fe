<script setup lang="ts">
import type { Component } from 'vue';
import type { SidebarMenuButtonProps } from './VSidebarMenuButtonChild.vue';
import { computed } from 'vue';
import { useSidebar } from './utils';
import SidebarMenuButtonChild from './VSidebarMenuButtonChild.vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SidebarMenuButtonProps & {
    tooltip?: string | Component;
}>(), {
    as: 'button',
    variant: 'default',
    size: 'default',
});

const { isMobile, state } = useSidebar();

const delegatedProps = computed(() => {
    const { tooltip, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <SidebarMenuButtonChild
        v-if="!tooltip"
        v-bind="{ ...delegatedProps, ...$attrs }"
    >
        <slot />
    </SidebarMenuButtonChild>

    <VTooltip v-else>
        <VTooltipTrigger as-child>
            <SidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
                <slot />
            </SidebarMenuButtonChild>
        </VTooltipTrigger>
        <VTooltipContent
            side="right"
            align="center"
            :hidden="state !== 'collapsed' || isMobile"
        >
            <template v-if="typeof tooltip === 'string'">
                {{ tooltip }}
            </template>
            <component
                :is="tooltip"
                v-else
            />
        </VTooltipContent>
    </VTooltip>
</template>
