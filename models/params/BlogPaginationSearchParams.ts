export class BlogPaginationSearchParams extends PaginationSearchParam {
    title!: Undefined<string>;
    status!: ContentStatus[];

    constructor() {
        super();

        Object.assign(
            this,
            {
                status: [
                    CONTENT_STATUS.PUBLISHED,
                    CONTENT_STATUS.DRAFT,
                    CONTENT_STATUS.ARCHIVED,
                ],
            },
        );
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setStatus(status: ContentStatus | ContentStatus[]): this {
        this.status = isArray(status) ? (this.status = status) : (this.status = [status]);
        return this;
    }
}
