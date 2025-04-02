<script lang="ts" setup>
import { VBadge } from '#components';

const params = reactive(new BlogPaginationSearchParams());
const search = reactive({
    query: '',
    count: 0,
});
const { results, total, isFetching } = useQueryBlogList({
    params,
    searchCount: search.count,
});
const columns = computed(() =>
    new TableColumnBuilder<BlogListResponseDto>()
        .setColumn({
            key: 'title',
            sortKey: 'title',
            name: 'Title',
        })
        .setColumn({
            key: 'author',
            sortKey: 'author',
            name: 'Author',
        })
        .setColumn({
            key: 'status',
            sortKey: 'status',
            name: 'Status',
            render: row => h(
                VBadge,
                {
                    variant: CONTENT_STATUS_VARIANTS[row.status],
                },
                () => row.status,
            ),
        })
        .build(),
);
const handleSearch = () => {
    params
        .setTitle(search.query)
        .setFirstPage();
    ++search.count;
};
</script>

<template>
    <VContainer class="space-y-6">
        <form @submit.prevent="handleSearch">
            <VInput
                v-model="search.query"
                name="title"
                placeholder="Title"
                size="md"
            />
        </form>
        <VTable
            v-model:sort-key="params.sortBy"
            v-model:sort-direction="params.direction"
            v-model:page="params.page"
            v-model:per-page="params.limit"
            name="blog"
            title="Blog"
            :entries="results"
            :columns="columns"
            :total="total"
            :loading="isFetching"
            with-number
        />
    </VContainer>
</template>
