const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  
  calculateDepth(arr) {

    let depth = 0;

    //если это не массив, а элемент, функция возвращает 0
    if (!Array.isArray(arr)) { return 0; }

    for (let i = 0; i < arr.length; i++) {
      let nestedDepth = this.calculateDepth(arr[i]); //вместо this подставляется имя экземпляра класса
    
      if (nestedDepth > depth) {
        depth = nestedDepth;
      }
    }
  
    return depth + 1; //минимальная глубина массива равна 1
  }
}

module.exports = {
  DepthCalculator
};
