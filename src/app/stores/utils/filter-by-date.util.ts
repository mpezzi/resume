import * as moment from 'moment';

/**
 * Provides Filter By Date Utility Function.
 */
export const filterByDate = (date) => (i: any) => {

  if (i.start_at && !i.end_at) {
    return moment(date).isAfter(i.start_at);
  }

  if (!i.start_at && i.end_at) {
    return moment(date).isBefore(i.end_at);
  }

  if (i.start_at && i.end_at) {
    return moment(date).isBetween(i.start_at, i.end_at);
  }

  return true;

};
