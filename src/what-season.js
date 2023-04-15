const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'; //если аргумент функции пустой
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error('Invalid date!'); //если аргумент не дата
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!'); //настоящая дата это экземпляр класса Date, а фейковая deeperFakeDate - нет
  }

  if (Object.keys(date).length != 0) {
    throw Error('Invalid date!'); //у настоящей даты длина массива ключей 0, а у фейковой deeperFakeDate получается 9!!!
  }

  let arrSeason = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  let month = date.getMonth();

  for (let i = 0; i < arrSeason.length; i++) {
    if (month == i) {
        return arrSeason[i];
    }
  }

}

module.exports = {
  getSeason
};
