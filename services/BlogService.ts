export type BlogService = {
    getBlogList: (params: BlogPaginationSearchParams) => Promise<GenericPagination<BlogListResponseDto>>;
};
