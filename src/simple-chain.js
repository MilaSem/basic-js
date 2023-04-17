const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.chainArr.length || typeof(position) != 'number') {
      this.chainArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    
    this.chainArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let finish = '';

    for (let i = 0; i < this.chainArr.length; i++) {
      finish += `( ${this.chainArr[i]} )~~`
    }

    this.chainArr = [];
    return finish.slice(0, -2);
  }
  
};

module.exports = {
  chainMaker
};
