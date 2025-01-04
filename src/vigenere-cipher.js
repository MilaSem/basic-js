const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  // по умолчанию направление шифрования/расшифровки прямое
  constructor(method = "true") {
    this.type = method;
  }

  // общая логика для шифрования/расшифровки
  // isEncrypt=true - шифрование, false - расшифровка
  process(message, key, isEncrypt) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!message || !key) throw new Error("Incorrect arguments!");

    let result = [];

    // преобразуем в верхний регистр, повторяем, обрезаем,
    // чтобы соответствовал длине message
    let normalizeKey = key
      .toUpperCase()
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length);

    // индекс символа в ключе
    let j = 0;

    let normalizeMessage = message.toUpperCase();

    for (let i = 0; i < normalizeMessage.length; i += 1) {
      const messageChar = normalizeMessage[i];

      // если очередной символ в сообщении - буква, то шифруем по ключу
      // если какой-то другой - пушим без изменения

      if (alphabet.includes(messageChar)) {
        const keyChar = normalizeKey[j];
        j += 1;
        const index =
          (alphabet.indexOf(messageChar) +
            (isEncrypt ? 1 : -1) * alphabet.indexOf(keyChar) +
            26) %
          26;
        result.push(alphabet[index]);
      } else {
        result.push(messageChar);
      }
    }

    return this.type ? result.join("") : result.reverse().join("");
  }

  encrypt(message, key) {
    return this.process(message, key, true);
  }

  decrypt(message, key) {
    return this.process(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
