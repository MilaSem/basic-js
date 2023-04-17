const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
    
let heightArr = []; //массив только для роста

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != -1) {
    heightArr.push(arr[i]);
  }
}
  
let arrResult = heightArr.sort((a,b) => a - b); //стрелочная функция для корректной сортировки

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == -1) {
    arrResult.splice(i, 0, -1); //вставляем -1 туда, где они были в исходном массиве
  }
}
  
  return arrResult;
}

module.exports = {
  sortByHeight
};
