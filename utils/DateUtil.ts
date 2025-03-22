const dayjs = useDayjs();

/**
 * @description Format a date string according to the specified format. If the date is within the last 7 days, return a relative date string.
 */
export const formatDate = ({
    date,
    format = 'dddd, DD MMMM YYYY, HH:MM:ss',
}: {
    date: number;
    format?: string;
}) => {
    const normalizedDate = typeof date === 'number' && date < 1e12 ? date * 1000 : date;
    const dateObj = dayjs(normalizedDate);
    const now = dayjs();
    return now.diff(dateObj, 'day') < 7 ? dateObj.fromNow() : dateObj.format(format);
};

/**
 * @description Get the current date in Unix timestamp in seconds
 */
export const now = (): number => dayjs().valueOf();
