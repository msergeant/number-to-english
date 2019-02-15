import StatFinder from './StatFinder'

it('calculateStats returns length of the string', () => {
  expect(StatFinder.calculateStats("", "e").length).toEqual(0);
  expect(StatFinder.calculateStats("one", "e").length).toEqual(3);
});

it('calculateStats returns occurrences of the target character', () => {
  expect(StatFinder.calculateStats("", "e").occurrences).toEqual(0);
  expect(StatFinder.calculateStats("one", "e").occurrences).toEqual(1);
  expect(StatFinder.calculateStats("ehhheee", "h").occurrences).toEqual(3);
  expect(StatFinder.calculateStats("ehhheee", "z").occurrences).toEqual(0);
});

it('calculateStats returns occurrences of the target character', () => {
  expect(StatFinder.calculateStats("ehhheee", "z").targetProbability).toEqual(0);
  expect(StatFinder.calculateStats("ehhheee", "e").targetProbability).toEqual( 4/7 );
});

it('getEnglishString returns the full string of English conversions', () => {
  expect(StatFinder.getEnglishString(1, 2)).toEqual( "onetwo" );
  expect(StatFinder.getEnglishString(5, 10)).toEqual( "fivesixseveneightnineten" );
});

it('getEnglishString works with string inputs', () => {
  expect(StatFinder.getEnglishString("1", "2")).toEqual( "onetwo" );
});

it('findAllStats returns the proper stats', () => {
  expect(StatFinder.findAllStats(1, 2, "o")).toEqual(
    {
      length: 6,
      occurrences: 2,
      targetProbability: 1 / 3,
      string: "onetwo"
    }
  );
  expect(StatFinder.findAllStats(5, 10, "x")).toEqual(
    {
      length: 24,
      occurrences: 1,
      targetProbability: 1 / 24,
      string: "fivesixseveneightnineten"
    }
  );
});
