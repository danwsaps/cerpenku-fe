/**
 * @description Checks if the given value is an array.
 */
export const isArray = <T>(value?: T | T[]): value is T[] => Array.isArray(value);

/**
 * @description Checks if the given value is an array and has elements.
 */
export const isArrayExist = <T>(value?: T[]): value is T[] => isArray(value) && !!value.length;

/**
 * @description format value as array or array empty
 */
export const isArrayEmpty = <T>(value?: T[] | null): T[] => value ?? [];

/**
 * @description Checks if the given value is null or undefined.
 */
export const isNil = (value: unknown): boolean => value == null;

/**
 * @description Checks if the given value is a finite number.
 */
export const isNumber = (value: unknown): value is number => Number.isFinite(value);

/**
 * @description Checks if the given string value represents a numeric value.
 */
export const isNumeric = (value: string): boolean => !isNil(value) ? /^-?\d+$/.test(value) : false;

/**
 * @description check value is date
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;

/**
 * @description check value is string array
 */
export const isStringArray = (value?: string[]): value is string[] => isArray(value) && value.every(item => typeof item === 'string');

/**
 * @description format value as date or null
 */
export const dateOrNull = (value?: Date | null) => isDate(value) ? value : null;

/**
 * @description format value as date or current date
 */
export const dateOrZero = (value?: Date | null) => isDate(value) ? value : new Date();

/**
 * @description format value or null
 */
export const valueOrNull = <TData>(value?: TData | null) => value || null;

/**
 * @description format value as string or null
 */
export const stringOrNull = (value?: string | null) => typeof value === 'string' ? value : null;

/**
 * @description format value as string or fallback
 */
export const stringOrFallback = (value?: string | null, fallback: string = '') => value || fallback;

/**
 * @description format value as number or empty
 */
export const stringOrEmpty = (value?: string | null) => typeof value === 'string' && value ? value : '';

/**
 * @description format value as string array or empty
 */
export const stringArrayOrEmpty = (value?: string[]): string[] => isStringArray(value) ? value : [];

/**
 * @description format value as number or null
 */
export const numberOrNull = (value?: number | null) => isNumber(value) ? value : null;

/**
 * @description format value as number or fallback
 */
export const numberOrFallback = (value?: number | null, fallback: number = 0) => numberOrNull(value) || fallback;

/**
 * @description format value as number or zero
 */
export const numberOrZero = (value?: number | null) => isNumber(value) ? value : 0;

/**
 * @description Generate UUID V4
 */
export const UUIDV4 = () => useNuxtApp().$id.v4();

/**
 * @description Generate UUID V7
 */
export const UUIDV7 = () => useNuxtApp().$id.v7();

/**
 * @description Maps a paginated response of type T to type U using the provided mapper function.
 */
export const genericPaginationDtoMapper = <T, U>(
    response: GenericPagination<T>,
    mapper: (item: T) => U,
): GenericPagination<U> => {
    return {
        data: response.data.map(mapper),
        elements: response.elements,
        pages: response.pages,
    };
};
