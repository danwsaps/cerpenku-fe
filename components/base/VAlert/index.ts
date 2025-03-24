import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const alertVariants = cva(
    'relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50',
    {
        variants: {
            variant: {
                default: 'bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50',
                primary: 'border-primary/50 text-primary dark:border-primary [&>svg]:text-primary dark:border-primary/50 dark:text-primary dark:dark:border-primary dark:[&>svg]:text-primary',
                success: 'border-success-500/50 text-success-500 dark:border-success-900 [&>svg]:text-success-500 dark:border-success-900/50 dark:text-success-900 dark:dark:border-success-900 dark:[&>svg]:text-success-900',
                warning: 'border-warning-500/50 text-warning-500 dark:border-warning-500 [&>svg]:text-warning-500 dark:border-warning-900/50 dark:text-warning-900 dark:dark:border-warning-900 dark:[&>svg]:text-warning-900',
                info: 'border-info-500/50 text-info-500 dark:border-info-500 [&>svg]:text-info-500 dark:border-info-900/50 dark:text-info-900 dark:dark:border-info-900 dark:[&>svg]:text-info-900',
                destructive: 'border-danger-500/50 text-danger-500 dark:border-danger-500 [&>svg]:text-danger-500 dark:border-danger-900/50 dark:text-danger-900 dark:dark:border-danger-900 dark:[&>svg]:text-danger-900',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
