import type { ContentStatus } from '~/types';

export type BlogListResponse = {
    id: number;
    title: string;
    author_name: string;
    content: string;
    status: ContentStatus;
};
