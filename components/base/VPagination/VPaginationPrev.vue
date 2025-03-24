<script setup lang="ts">
import type { PaginationPrevProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { PaginationActionVariants } from '.';
import { PaginationPrev } from 'reka-ui';
import { paginationActionVariants } from '.';

type Props = PaginationPrevProps & {
    class?: HTMLAttributes['class'];
    rounded?: PaginationActionVariants['rounded'];
    size?: PaginationActionVariants['size'];
};

const { asChild = true, ...props } = defineProps<Props>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <PaginationPrev
        v-bind="delegatedProps"
        :as-child="asChild"
    >
        <slot>
            <VButton
                size="icon"
                name="btn-pagination-prev"
                type="button"
                aria-label="Go to previous page"
                data-testid="btn-pagination-prev"
                :class="
                    cn(paginationActionVariants({ rounded, size }))
                "
            >
                <NuxtIcon name="mdi:arrow-left" />
                <span>Previous</span>
            </VButton>
        </slot>
    </PaginationPrev>
</template>
