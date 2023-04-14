const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let arrLetters = [];
  let nameDreamTeam = false;

  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        let str = members[i].trim().toUpperCase(); //посмотрела по тестам, могут быть пробелы и всё маленькими буквами
        arrLetters.push(str[0]);
      }
    }  
    nameDreamTeam = arrLetters.sort().join('');
  }

  return ( ((nameDreamTeam) && (nameDreamTeam !== '')) ? nameDreamTeam : false ); //могут быть не строки, а undefind и null

}

module.exports = {
  createDreamTeam
};
