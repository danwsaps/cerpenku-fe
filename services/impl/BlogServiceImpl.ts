export class BlogServiceImpl implements BlogService {
    async getBlogList(params: BlogPaginationSearchParams): Promise<GenericPagination<BlogListResponseDto>> {
        const response = await useNuxtApp().$http<GenericPagination<BlogListResponse>>(
            BlogEndpoint.BLOG,
            {
                method: 'GET',
                params: {
                    ...params,
                },
            },
        );

        return genericPaginationDtoMapper(response, item =>
            new BlogListResponseDto()
                .setId(item.id)
                .setTitle(item.title)
                .setAuthor(item.author_name)
                .setContent(item.content)
                .setStatus(item.status));
    }
}
