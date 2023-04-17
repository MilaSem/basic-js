const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let strNum = `${n}`;
  let arrNum = [];

  for (let i = 0; i < strNum.length; i++) {
      arrNum.push(strNum.replace(strNum[i], '')); //убираю по одной цифре и добавляю в массив
  }

  let maxNum = +arrNum[0];
  // ищу максимум по массиву
  for (let i = 0; i < arrNum.length; i++) {
      if (+arrNum[i] > maxNum) {
          maxNum = +arrNum[i];
      }
  }
  
  return maxNum;
}

module.exports = {
  deleteDigit
};
