const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1, 
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  function stringRepeat(str, times, separator) {
    let arr = [];
    for(let i = 0; i < times; i++){
      arr.push(String(str));
    }
    return arr.join(separator);
  };

  let result = stringRepeat (
    str + stringRepeat(addition, additionRepeatTimes, additionSeparator),
    repeatTimes,
    separator
  );

  return result;
  
}

module.exports = {
  repeater
};
