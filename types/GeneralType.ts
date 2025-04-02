import type { RouteLocationRaw } from 'vue-router';

export type ObjectValues<Type> = Type[keyof Type];
export type ObjectKeys<Type> = keyof Type;
export type Nullable<Type> = Type | null;
export type Undefined<Type> = Type | undefined;

export type GenericPagination<T> = {
    data: T[];
    elements: number;
    pages: number;
};

export type ErrorResponse = {
    code: string;
    message: string;
};

export type Breadcrumb = {
    name: string;
    to?: RouteLocationRaw;
};

export type Tab<T extends string> = {
    key: T;
    name: string;
    icon?: VNode;
};

export type ContentStatus = ObjectValues<typeof CONTENT_STATUS>;
export type SortDirection = ObjectValues<typeof SORT_DIRECTION>;
