export class BlogListResponseDto {
    id!: number;
    title!: string;
    author!: string;
    content!: string;
    status!: ContentStatus;

    setId(id: number): this {
        this.id = id;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setAuthor(author: string): this {
        this.author = author;
        return this;
    }

    setContent(content: string): this {
        this.content = content;
        return this;
    }

    setStatus(status: ContentStatus): this {
        this.status = status;
        return this;
    }
}
