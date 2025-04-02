import { cva } from 'class-variance-authority';

export const tableColumnVariants = cva(
    'px-4 py-4 font-medium whitespace-nowrap text-left border-y border-muted-200/60',
    {
        variants: {
            sortable: {
                true: 'cursor-pointer hover:bg-muted-100 dark:hover:bg-muted-800',
            },
        },
    },
);

export const tableRowVariants = cva(
    'border-b border-b-muted-200 transition duration-150 hover:bg-muted-50 dark:border-muted-800',
);

export const tableCellVariants = cva(
    'py-3 px-4',
);

export const tableHeadVariants = cva(
    'text-muted-600 bg-muted-50 dark:bg-muted-700 dark:text-muted-300',
);
