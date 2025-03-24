<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { PaginationItemVariants } from '.';
import { PaginationListItem } from 'reka-ui';
import { paginationItemVariants } from '.';

type Props = PaginationListItemProps & {
    class?: HTMLAttributes['class'];
    size?: PaginationItemVariants['size'];
};

const props = defineProps<Props>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <PaginationListItem
        v-bind="delegatedProps"
        :value="value"
        :class="cn(paginationItemVariants({ size }), props.class)"
    >
        <slot>
            {{ value }}
        </slot>
    </PaginationListitem>
</template>
