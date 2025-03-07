"use strict";

var _console, _console2;
var mediaAritmetica = function mediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, sum) {
    return accum + sum;
  }, 0);
  var media = sum / numbers.length;
  return media;
};
var mediana = function mediana() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  if (numbers.length % 2 !== 0) {
    var sortedNumbers = [].concat(numbers).sort(function (a, b) {
      return a - b;
    });
    return sortedNumbers[Math.floor(sortedNumbers.length / 2)];
  }
  if (numbers.length % 2 === 0) {
    var _sortedNumbers = [].concat(numbers).sort(function (a, b) {
      return a - b;
    });
    return (_sortedNumbers[Math.floor(_sortedNumbers.length / 2)] + _sortedNumbers[Math.floor(_sortedNumbers.length / 2 - 1)]) / 2;
  }
};
var mediaPonderada = function mediaPonderada(numbers, pesos) {
  if (numbers.length !== pesos.length || numbers.length === 0) {
    return alert('Precisa indicar o peso e o número');
  }
  var sumNumbers = 0;
  var sumPeso = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i] * pesos[i];
    sumPeso += pesos[i];
  }
  return parseFloat(sumNumbers / sumPeso);
};
var mediaPonderada2 = function mediaPonderada2() {
  for (var _len3 = arguments.length, entries = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    entries[_key3] = arguments[_key3];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var sumWeight = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / sumWeight;
};
var moda = function moda() {
  var frequency = {};
  var maxfrequency = 0;
  var moda = [];
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  numbers.forEach(function (number) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] > maxfrequency) {
      maxfrequency = frequency[number];
      moda = [number];
    } else if (frequency[number] === maxfrequency) {
      moda.push(number);
    }
  });
  return moda;
};
console.log(mediaAritmetica(1, 2, 10, 20, 0));
console.log(mediana(1, 2, 10, 20, 0));
console.log(mediana(1, 11, 10, 20, 0, 4));
(_console = console) === null || _console === void 0 || _console.log(mediaPonderada([10, 4, 5, 4], [3, 2, 1, 6]));
console.log(moda(1, 4, 5, 6, 2, 4, 5, 6, 4, 5, 5));
(_console2 = console) === null || _console2 === void 0 ? void 0 : _console2.log(mediaPonderada2({
  number: 10,
  weight: 3
}, {
  number: 4,
  weight: 2
}, {
  number: 5,
  weight: 1
}, {
  number: 4,
  weight: 6
}));