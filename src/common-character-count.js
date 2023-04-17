const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let tempStr1 = s1;
  let tempStr2 = s2;

  // перебираю символы во второй строке и смотрю, есть ли такие в первой
  for (let i = 0; i < tempStr2.length; i++) {
    if (tempStr1.includes(tempStr2[i])) {
      console.log(tempStr2[i]);
      tempStr1 = tempStr1.replace(tempStr2[i], '*'); //заменяем первое совпадение на '*' и переписываем tempStr1
    }
  }

  let countAstr = 0; //считаю число звёздочек
  for (let i = 0; i < tempStr1.length; i++) {
    if (tempStr1[i] === '*') {
      countAstr++;
    }
  }
  
  return countAstr;
}

module.exports = {
  getCommonCharacterCount
};
