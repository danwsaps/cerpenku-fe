import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 *  @description combine class names and then remove any conflicting TailwindCSS classes, resulting in a clean, merged string of class names.
 */
export const cn = (...classes: ClassValue[]): string => {
    return twMerge(clsx(...classes));
};
