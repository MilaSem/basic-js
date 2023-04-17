const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexDog = email.lastIndexOf('@'); //указатель на домен - собака, но почему-то в тестовой строке их несколько
  console.log(indexDog);
  let domainStr = email.slice(indexDog + 1); //выделяем подстроку, не включая собаку, и до конца
  return domainStr;
}

module.exports = {
  getEmailDomain
};
