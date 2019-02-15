const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const EnglishGenerator = {
  generate: (input) => {
    if(input > 20) {
      const ones = input % 10;
      const tens = ( input % 100 ) - ones;
      const hundreds = Math.floor(input / 100);

      const output = [];
      if(hundreds > 0) {
        output.push(numbers[hundreds]);
        output.push("hundred");
      }
      if(tens > 0) {
        output.push(numbers[tens]);
      }
      if(ones > 0) {
        output.push(numbers[ones]);
      }

      return output.join("");
    } else {
      return numbers[input];
    }
  }
};

export default EnglishGenerator;
