<script setup lang="ts">
import type { PaginationNextProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { PaginationActionVariants } from '.';
import { PaginationNext } from 'reka-ui';
import { paginationActionVariants } from '.';

type Props = PaginationNextProps & {
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
    <PaginationNext
        v-bind="delegatedProps"
        :as-child="asChild"
    >
        <slot>
            <VButton
                name="btn-pagination-prev"
                type="button"
                size="icon"
                aria-label="Go to previous page"
                data-testid="btn-pagination-prev"
                :class="
                    cn(paginationActionVariants({ rounded, size }))
                "
            >
                <span>Next</span>
                <NuxtIcon name="mdi:arrow-right" />
            </VButton>
        </slot>
    </PaginationNext>
</template>
