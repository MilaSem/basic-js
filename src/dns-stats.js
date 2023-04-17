const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let objDNS = {};

  
  for (let i = 0; i < domains.length; i++) {
    let arr = [];
    arr = domains[i].split('.'); //из каждой строки получаю массив имён
    arr.reverse(); //переворачиваю массив так, как в задании указано
    console.log(arr);

    let objProp = ''; //составляю доменные имена, вношу в объект, присваиваю 1 или увеличиваю на 1
    for (let j = 0; j < arr.length; j++) {
      objProp += '.' + arr[j];
        if (objDNS[objProp]) {
          objDNS[objProp] += 1;
        } else {
           objDNS[objProp] = 1;
        }
    }
      
  }

  return objDNS;

}

module.exports = {
  getDNSStats
};
