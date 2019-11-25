import { filterByDate } from './filter-by-date.util';

describe('filterByDate', () => {

  const datePast = new Date('2018-01-01T00:00:00.000Z').toISOString();
  const dateBetween = new Date('2019-01-02T00:00:00.000Z').toISOString();
  const dateFuture = new Date('2019-01-10T00:00:00.000Z').toISOString();
  const dateStartAt = new Date('2019-01-01T00:00:00.000Z').toISOString();
  const dateEndAt = new Date('2019-01-05T00:00:00.000Z').toISOString();

  it('should filter by start_at', () => {

    const item = { start_at: dateStartAt };

    expect(filterByDate(datePast)(item)).toBe(false);
    expect(filterByDate(dateFuture)(item)).toBe(true);

  });

  it('should filter by end_at', () => {

    const item = { end_at: dateEndAt };

    expect(filterByDate(datePast)(item)).toBe(true);
    expect(filterByDate(dateFuture)(item)).toBe(false);

  });

  it('should filter by start_at and end_at', () => {

    const item = { start_at: dateStartAt, end_at: dateEndAt };

    expect(filterByDate(datePast)(item)).toBe(false);
    expect(filterByDate(dateFuture)(item)).toBe(false);
    expect(filterByDate(dateBetween)(item)).toBe(true);

  });

});
