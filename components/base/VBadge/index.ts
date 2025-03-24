import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80',
                primary: 'border-transparent bg-primary text-neutral-50 shadow hover:bg-primary/80 dark:bg-indigo-900 dark:text-neutral-50 dark:hover:bg-indigo-900/80',
                secondary: 'border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
                success: 'border-transparent bg-success text-neutral-50 shadow hover:bg-success/80 dark:bg-green-900 dark:text-neutral-50 dark:hover:bg-green-900/80',
                warning: 'border-transparent bg-warning text-neutral-50 shadow hover:bg-warning/80 dark:bg-yellow-400 dark:text-neutral-900 dark:hover:bg-yellow-400/80',
                info: 'border-transparent bg-info text-neutral-50 shadow hover:bg-info/80 dark:bg-blue-900 dark:text-neutral-50 dark:hover:bg-blue-900/80',
                destructive: 'border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80',
                outline: 'text-neutral-950 dark:text-neutral-50',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
