const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
    
  let renameArr = [];
    
  let namesObj = {}; //ключи объекта - уникальные имена файлов

  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (namesObj[name] === undefined) { //если такого имени ещё нет в объекте, то вносим
      namesObj[name] = 1;
      renameArr.push(name);
      
    } else { //если есть, то получаем новое имя с суффиксом K, которое записываем в объект
      let nameK = `${name}(${namesObj[name]})`;
      namesObj[name] += 1;
      namesObj[nameK] = 1;
      renameArr.push(nameK);
    }
  }

  return renameArr;
}

module.exports = {
  renameFiles
};
