const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  // нужно посчитать сколько true окружает любую ячейку, каждое true = 1;
  
  let matrixNum = [];
          
  for (let i = 0; i < matrix.length; i++) { //по строкам
    matrixNum[i] = [];

    for (let j = 0; j < matrix[i].length; j++) { //по столбцам
      let countBomb = 0;

      //все возможные варианты размещения бомб с учётом того, что в крайних строчках и столбцах нет элементов с индексами -1 и +1
          
      if (matrix[i][j-1]) {countBomb++}; //если есть бомба выше i,j

      if (matrix[i][j+1]) {countBomb++}; //если есть бомба ниже i,j

      if (matrix[i-1]) { //если есть бомбы в строке ниже i,j слева, в i,j, справа
        if (matrix[i-1][j-1]) {countBomb++};
        if (matrix[i-1][j]) {countBomb++};                
        if (matrix[i-1][j+1]) {countBomb++};
      }
          
      if (matrix[i+1]) { //если есть бомбы в строке выше i,j слева, в i,j, справа
        if (matrix[i+1][j-1]) {countBomb++};               
        if (matrix[i+1][j]) {countBomb++};
        if (matrix[i+1][j+1]) {countBomb++};
      }

    matrixNum[i][j] = countBomb++;
  }
}
  return matrixNum;
}

module.exports = {
  minesweeper
};
