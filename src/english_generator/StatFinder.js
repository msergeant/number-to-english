import EnglishGenerator from './EnglishGenerator'

const StatFinder = {
  calculateStats: (input, target) => {
    const occurrences = (input.match(new RegExp(target, "g")) || []).length;
    return {
      length: input.length,
      occurrences: occurrences,
      targetProbability: occurrences / input.length,
      string: input
    };
  },

  getEnglishString: (startInput, endInput) => {
    let start = parseInt(startInput);
    let end = parseInt(endInput);

    return Array
      .from({length: end - start + 1}, (_, x) => x + start)
      .map(EnglishGenerator.generate)
      .join("");
  },

  findAllStats: (start, end, target) => {
    return StatFinder.calculateStats(
      StatFinder.getEnglishString(start, end),
      target);
  }
}

export default StatFinder;

