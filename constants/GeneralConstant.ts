export const CONTENT_STATUS = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED',
    ARCHIVED: 'ARCHIVED',
} as const;

export const CONTENT_STATUS_VARIANTS = {
    DRAFT: 'warning',
    PUBLISHED: 'success',
    ARCHIVED: 'destructive',
} as const;

export const SORT_DIRECTION = {
    ASCENDING: 'asc',
    DESCENDING: 'desc',
} as const;
