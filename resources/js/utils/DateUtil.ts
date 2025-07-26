import {
    format,
    isToday,
    parseISO,
    differenceInDays,
    addDays,
    isSameDay,
} from 'date-fns';

/**
 * Utility class for working with dates using date-fns.
 */
export default class DateUtil {
    /**
     * Get current date and time in the specified format.
     *
     * @param formatStr - The format string (default: `'dd/MM/yyyy HH:II:SS'`)
     * @returns The current date/time as a formatted string.
     *
     * @example
     * ```ts
     * DateUtil.now(); // "26/07/2025 23:10:00"
     * DateUtil.now('yyyy-MM-dd'); // "2025-07-26"
     * ```
     */
    static now(formatStr: string = 'dd/MM/yyyy HH:II:SS'): string {
        const now = new Date();
        return this.formatDate(now, formatStr);
    }

    /**
     * Format a date object or ISO string into a specific string format.
     *
     * @param date - The date to format (Date object or ISO string).
     * @param formatStr - The format string (default: `'dd/MM/yyyy HH:II:SS'`)
     * @returns Formatted date string.
     *
     * @example
     * ```ts
     * DateUtil.formatDate(new Date(), 'yyyy-MM-dd'); // "2025-07-26"
     * DateUtil.formatDate('2025-07-26T15:00:00Z', 'dd/MM/yyyy'); // "26/07/2025"
     * ```
     */
    static formatDate(
        date: Date | string,
        formatStr: string = 'dd/MM/yyyy HH:II:SS'
    ): string {
        const d = typeof date === 'string' ? parseISO(date) : date;
        return format(d, formatStr);
    }

    /**
     * Calculate the difference in days between two dates.
     *
     * @param date1 - First date (Date or ISO string).
     * @param date2 - Second date (Date or ISO string).
     * @returns Number of days between the two dates.
     *
     * @example
     * ```ts
     * DateUtil.diffInDays('2025-07-26', '2025-07-20'); // 6
     * ```
     */
    static diffInDays(date1: Date | string, date2: Date | string): number {
        const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
        const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
        return differenceInDays(d1, d2);
    }

    /**
     * Check if a date is today.
     *
     * @param date - The date to check (Date or ISO string).
     * @returns True if the date is today.
     *
     * @example
     * ```ts
     * DateUtil.isToday(new Date()); // true
     * DateUtil.isToday('2025-07-26'); // true or false depending on current date
     * ```
     */
    static isToday(date: Date | string): boolean {
        const d = typeof date === 'string' ? parseISO(date) : date;
        return isToday(d);
    }

    /**
     * Add a number of days to a given date.
     *
     * @param date - The base date (Date or ISO string).
     * @param days - Number of days to add.
     * @returns A new Date object after adding the days.
     *
     * @example
     * ```ts
     * DateUtil.addDays('2025-07-26', 3); // returns Date for '2025-07-29'
     * ```
     */
    static addDays(date: Date | string, days: number): Date {
        const d = typeof date === 'string' ? parseISO(date) : date;
        return addDays(d, days);
    }

    /**
     * Check if two dates fall on the same day.
     *
     * @param date1 - First date (Date or ISO string).
     * @param date2 - Second date (Date or ISO string).
     * @returns True if both dates are on the same calendar day.
     *
     * @example
     * ```ts
     * DateUtil.isSameDay('2025-07-26T10:00:00', '2025-07-26T22:00:00'); // true
     * ```
     */
    static isSameDay(date1: Date | string, date2: Date | string): boolean {
        const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
        const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
        return isSameDay(d1, d2);
    }
}
