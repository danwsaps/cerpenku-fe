<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <li
        role="presentation"
        aria-hidden="true"
        :class="cn('[&>svg]:size-3.5', props.class)"
    >
        <slot>
            <NuxtIcon name="lucide:chevron-right" />
        </slot>
    </li>
</template>
