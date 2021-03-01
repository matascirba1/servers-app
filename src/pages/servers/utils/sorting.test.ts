import {
  ascendingLexical,
  ascendingNumeric,
  descendingLexical,
  descendingNumeric,
  sortBy,
} from './sorting';

describe('sorting utils', () => {
  const mockData = [
    { name: 'A', distance: 10 },
    { name: 'B', distance: 5 },
    { name: 'C', distance: 8 },
  ];

  describe('sortBy', () => {
    test('return list sorted in ascending order by name', () => {
      const result = sortBy(ascendingLexical)([...mockData]);

      expect(result).toEqual(mockData);
    });

    test('return list sorted in descending order by name', () => {
      const result = sortBy(descendingLexical)([...mockData]);

      expect(result).toEqual([
        { name: 'C', distance: 8 },
        { name: 'B', distance: 5 },
        { name: 'A', distance: 10 },
      ]);
    });

    test('return list sorted in ascending order by distance', () => {
      const result = sortBy(ascendingNumeric)([...mockData]);

      expect(result).toEqual([
        { name: 'B', distance: 5 },
        { name: 'C', distance: 8 },
        { name: 'A', distance: 10 },
      ]);
    });

    test('return list sorted in descending order by distance', () => {
      const result = sortBy(descendingNumeric)([...mockData]);

      expect(result).toEqual([
        { name: 'A', distance: 10 },
        { name: 'C', distance: 8 },
        { name: 'B', distance: 5 },
      ]);
    });
  });
});
