const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; //радиоактивность современного изотопа
const HALF_LIFE_PERIOD = 5730; //период полураспада 

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  let sampleApproxAge = false;
 
  let k = Math.log(2)/HALF_LIFE_PERIOD;

    if (typeof(sampleActivity) === 'string') { //на вход функции подаётся активность изотопа из образца  в виде строки!

      sampleActivity = +sampleActivity; //переводим строку в число
  
      //активность изотопова в образце не может быть больше современной
      if ((sampleActivity > 0) && (sampleActivity <= 15)) {
        sampleApproxAge = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
      }
    }

  return sampleApproxAge;
}

module.exports = {
  dateSample
};
