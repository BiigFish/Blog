import { format, parse } from "date-fns";

export function getPostDate(dateString: string): string {
    const date = parse(dateString, 'yyyy-MM-dd', new Date());
    const result = format(date, 'MMMM dd, yyyy');
    return result
}