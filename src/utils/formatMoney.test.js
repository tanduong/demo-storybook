import formatMoney from './formatMoney';

describe('formatMoney', () => {
  test('it formats 4 digit', () => {
    expect(formatMoney(1000)).toBe('1,000');
  });

  test('it formats 7 digit', () => {
    expect(formatMoney(1000000)).toBe('1,000,000');
  });

  test('it round to 2 decimal', () => {
    expect(formatMoney(100.1234)).toBe('100.12');
    expect(formatMoney(100.9876)).toBe('100.99');
  });
});
