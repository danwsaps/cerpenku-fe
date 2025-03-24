import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const selectButtonVariants = cva(
    'inline-flex items-center w-full space-x-2 font-normal whitespace-nowrap transition duration-150 text-left text-muted-800 bg-white border border-muted-200 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-muted-50 dark:text-muted-100 dark:bg-muted-700 dark:border-muted-700 dark:focus:border-primary-700 dark:focus:ring-primary-700 dark:disabled:opacity-60 dark:disabled:border-muted-700 dark:disabled:focus:border-muted-700',
    {
        variants: {
            rounded: {
                base: 'rounded',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
                none: 'rounded-none',
            },
            size: {
                xs: 'h-8 px-2 text-xs',
                sm: 'h-9 px-2.5 text-sm',
                md: 'h-10 px-3 py-2 text-sm',
                lg: 'h-11 px-4 py-3 text-base',
            },
            isInvalid: {
                yes: 'bg-red-50 dark:bg-muted-600 text-red-600 dark:text-red-300 border-red-600 focus:border-red-600 dark:border-red-400 dark:focus:border-red-400 focus:ring-red-600 dark:focus:ring-red-400',
            },
        },
        defaultVariants: {
            rounded: 'md',
            size: 'sm',
        },
    },
);

export const inputColumnVariants = cva('relative', {
    variants: {
        cols: {
            1: 'lg:grid lg:grid-cols-1',
            2: 'lg:grid lg:grid-cols-2',
            3: 'lg:grid lg:grid-cols-3',
            4: 'lg:grid lg:grid-cols-4',
            5: 'lg:grid lg:grid-cols-5',
            6: 'lg:grid lg:grid-cols-6',
            7: 'lg:grid lg:grid-cols-7',
            8: 'lg:grid lg:grid-cols-8',
            9: 'lg:grid lg:grid-cols-9',
            10: 'lg:grid lg:grid-cols-10',
            11: 'lg:grid lg:grid-cols-11',
            12: 'lg:grid lg:grid-cols-12',
            none: 'lg:grid lg:grid-cols-none',
        },
    },
});

export const inputColumnSpanVariants = cva('relative', {
    variants: {
        cols: {
            1: 'lg:col-span-1',
            2: 'lg:col-span-2',
            3: 'lg:col-span-3',
            4: 'lg:col-span-4',
            5: 'lg:col-span-5',
            6: 'lg:col-span-6',
            7: 'lg:col-span-7',
            8: 'lg:col-span-8',
            9: 'lg:col-span-9',
            10: 'lg:col-span-10',
            11: 'lg:col-span-11',
            12: 'lg:col-span-12',
            full: 'lg:col-span-full',
        },
    },
});

export const selectLoadingVariants = cva(
    'absolute z-20 bg-white inset-0 px-4 flex items-center justify-start dark:bg-muted-700 border border-muted-200',
    {
        variants: {
            rounded: {
                base: 'rounded',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
                none: 'rounded-none',
            },
        },
        defaultVariants: {
            rounded: 'md',
        },
    },
);

export type SelectButtonVariants = VariantProps<typeof selectButtonVariants>;
export type InputColumnVariants = VariantProps<typeof inputColumnVariants>;
export type InputColumnSpanVariants = VariantProps<typeof inputColumnSpanVariants>;
