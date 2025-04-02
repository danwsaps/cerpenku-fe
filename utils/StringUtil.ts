/**
 * @description This function capitalizes the first letter of the string and ensures the rest of the string is in lowercase.
 */
export const toCapitalizeCase = (text: string): string => text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);

/**
 * @description This function converts all the characters of the input string to lowercase.
 */
export const toLowerCase = (text: string): string => text.toLowerCase();

/**
 * @description This function converts all the characters of the input string to uppercase.
 */
export const toUpperCase = (text: string): string => text.toUpperCase();

/**
 * @description This function splits the input string into an array based on the provided separator.
 */
export const stringToArray = (text: string, separator: string): string[] => text.split(separator);

/**
 * @description This function truncates the input string if it exceeds the specified maximum length and adds ellipsis at the end.
 */
export const truncateString = ({
    text,
    maxLength = 50,
    ellipsisText = '...',
}: {
    text: string;
    maxLength?: number;
    ellipsisText?: string;
}) => text.length > maxLength
    ? `${text.slice(0, maxLength)}${ellipsisText}`
    : text;
