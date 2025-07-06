// C = (F - 32) × 5/9
// F = (C × 9/5) + 32

const convertToCelsius = function(F) {
  return decimalize((F - 32) * 5 / 9);
};

const convertToFahrenheit = function(C) {
  return decimalize((C * 9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

function decimalize(d) {
  return Math.round(d * 10) / 10;
}