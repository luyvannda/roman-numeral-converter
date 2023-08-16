const romanEquivalent = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};

function convertToRoman(num) {

  let output = "";

  let keys = Object
    .keys(romanEquivalent)
    .sort((a, b) => b - a)

  for (let key of keys) {
    const value = +key

    while (value <= num) {
      output += romanEquivalent[key];
      num -= value;
    }
  }
  return output;
}

let result = convertToRoman(10);
console.log(result);