import * as dayjs from 'dayjs';

/**
 * Filter By Date.
 */
export const filterByDate = (date: string) => (i: any): boolean => {

  if (i.start_at && !i.end_at) {
    return dayjs(date).isAfter(i.start_at);
  }

  if (!i.start_at && i.end_at) {
    return dayjs(date).isBefore(i.end_at);
  }

  if (i.start_at && i.end_at) {
    return dayjs(date).isAfter(i.start_at) && dayjs(date).isBefore(i.end_at);
  }

  return true;

};
