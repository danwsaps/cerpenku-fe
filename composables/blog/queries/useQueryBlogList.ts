import type { UseQueryOptions } from '@tanstack/vue-query';

export const useQueryBlogList = ({
    params,
    searchCount,
    options,
}: {
    params: BlogPaginationSearchParams;
    searchCount: MaybeRef<number>;
    options?: UseQueryOptions<GenericPagination<BlogListResponseDto>>;
}) => {
    const blogService = new BlogServiceImpl();
    const query = useQuery<GenericPagination<BlogListResponseDto>>({
        queryKey: ['blog-list', params, searchCount],
        queryFn: () => blogService.getBlogList(params),
        ...options,
    });
    const total = computed(() => numberOrZero(query.data.value?.elements));
    const results = computed(() =>
        query.data.value && isArray(query.data.value.data) ? query.data.value.data : [],
    );
    const refetch = () => {
        if (params.page > 1)
            params.setFirstPage();
        else query.refetch();
    };
    return { ...query, results, total, refetch };
};
