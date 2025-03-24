import type { RouteLocationRaw } from 'vue-router';

export type Breadcrumb = {
    name: string;
    to?: RouteLocationRaw;
};

export type Tab<TKey extends string> = {
    key: TKey;
    name: string;
    icon?: VNode;
};
