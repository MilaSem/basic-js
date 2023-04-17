const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { //массив по типу object, поэтому проверка через isArray
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let tempArr = arr.concat(); //создаю новый массив, чтобы функция не влияла на исходный

  let doubleNextStr = '--double-next';
  let doubleNextIndStr = tempArr.indexOf(doubleNextStr);
  if ((doubleNextIndStr != -1) && (tempArr[doubleNextIndStr + 1])) {
      tempArr.splice(doubleNextIndStr + 1, 0, tempArr[doubleNextIndStr + 1]); //добавляю элемент перед doubleNextStr
  }

  let discNextStr = '--discard-next';    
  let discNextIndStr = tempArr.indexOf(discNextStr);
  if ((discNextIndStr != -1) && (tempArr[discNextIndStr + 1])) {
      tempArr.splice(discNextIndStr + 1, 1); //удаляю элемент после discNextIndStr
  }

  let doublePrevStr = '--double-prev';
  let doublePrevIndStr = tempArr.indexOf(doublePrevStr);
  if ((doublePrevIndStr != -1) && (tempArr[doublePrevIndStr - 1])) {
      tempArr.splice(doublePrevIndStr - 1, 0, tempArr[doublePrevIndStr - 1]); //добавляю элемент перед doubleNextStr
  }

  let discPrevStr = '--discard-prev';
  let discPrevIndStr = tempArr.indexOf(discPrevStr);
  if ((discPrevIndStr != -1) && (tempArr[discPrevIndStr - 1])) {
      tempArr.splice(discPrevIndStr - 1, 1); //удаляю элемент перед discPrevStr
  }

  //убираю управляющие последовательности
  let arrResult = [];

  for (let i = 0; i < tempArr.length; i++) {
      if ((tempArr[i] !== discNextStr) && (tempArr[i] !== discPrevStr) && (tempArr[i] !== doubleNextStr) && (tempArr[i] !== doublePrevStr)) {
          arrResult.push(tempArr[i]);
      }
  }

  return arrResult;

}

module.exports = {
  transform
};
