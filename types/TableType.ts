import type { ClassValue } from 'clsx';

export type TableColumn<TData extends object> = {
    key: keyof TData | '#';
    name: string;
    columnClass?: ClassValue;
    cellClass?: string | ((row: TData) => ClassValue);
    sortKey?: string;
    render?: (row: TData, index: number) => VNode;
};

export type TableRowSelection<TData> = {
    key: keyof TData;
    props?: (record: TData, index: number) => {
        disabled?: boolean;
        locked?: boolean;
    };
};
