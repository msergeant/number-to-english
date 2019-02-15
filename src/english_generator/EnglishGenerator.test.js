import EnglishGenerator from './EnglishGenerator'

it('Converts single digit numbers', () => {
  expect(EnglishGenerator.generate(1)).toEqual('one');
  expect(EnglishGenerator.generate(2)).toEqual('two');
  expect(EnglishGenerator.generate(3)).toEqual('three');
  expect(EnglishGenerator.generate(4)).toEqual('four');
  expect(EnglishGenerator.generate(5)).toEqual('five');
  expect(EnglishGenerator.generate(6)).toEqual('six');
  expect(EnglishGenerator.generate(7)).toEqual('seven');
  expect(EnglishGenerator.generate(8)).toEqual('eight');
  expect(EnglishGenerator.generate(9)).toEqual('nine');
});

it('Converts teens', () => {
  expect(EnglishGenerator.generate(10)).toEqual('ten');
  expect(EnglishGenerator.generate(11)).toEqual('eleven');
  expect(EnglishGenerator.generate(12)).toEqual('twelve');
  expect(EnglishGenerator.generate(13)).toEqual('thirteen');
  expect(EnglishGenerator.generate(14)).toEqual('fourteen');
  expect(EnglishGenerator.generate(15)).toEqual('fifteen');
  expect(EnglishGenerator.generate(16)).toEqual('sixteen');
  expect(EnglishGenerator.generate(17)).toEqual('seventeen');
  expect(EnglishGenerator.generate(18)).toEqual('eighteen');
  expect(EnglishGenerator.generate(19)).toEqual('nineteen');
});

it('Converts multiples of 10', () => {
  expect(EnglishGenerator.generate(20)).toEqual('twenty');
  expect(EnglishGenerator.generate(30)).toEqual('thirty');
  expect(EnglishGenerator.generate(40)).toEqual('forty');
  expect(EnglishGenerator.generate(50)).toEqual('fifty');
  expect(EnglishGenerator.generate(60)).toEqual('sixty');
  expect(EnglishGenerator.generate(70)).toEqual('seventy');
  expect(EnglishGenerator.generate(80)).toEqual('eighty');
  expect(EnglishGenerator.generate(90)).toEqual('ninety');
  expect(EnglishGenerator.generate(100)).toEqual('onehundred');
});

it('Converts numbers greater than 20', () => {
  expect(EnglishGenerator.generate(21)).toEqual('twentyone');
  expect(EnglishGenerator.generate(32)).toEqual('thirtytwo');
  expect(EnglishGenerator.generate(43)).toEqual('fortythree');
  expect(EnglishGenerator.generate(54)).toEqual('fiftyfour');
  expect(EnglishGenerator.generate(65)).toEqual('sixtyfive');
  expect(EnglishGenerator.generate(76)).toEqual('seventysix');
  expect(EnglishGenerator.generate(87)).toEqual('eightyseven');
  expect(EnglishGenerator.generate(98)).toEqual('ninetyeight');
  expect(EnglishGenerator.generate(109)).toEqual('onehundrednine');
});

it('Converts numbers greater than 100', () => {
  expect(EnglishGenerator.generate(101)).toEqual('onehundredone');
  expect(EnglishGenerator.generate(115)).toEqual('onehundredfifteen');
  expect(EnglishGenerator.generate(123)).toEqual('onehundredtwentythree');
  expect(EnglishGenerator.generate(400)).toEqual('fourhundred');
  expect(EnglishGenerator.generate(299)).toEqual('twohundredninetynine');
});
