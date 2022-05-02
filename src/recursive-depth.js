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
  count = 0;
  
  calculateDepth(arr) {
    this.count++;
		arr = arr.filter(item => Array.isArray(item));
		if (arr.length) {
			return this.calculateDepth(arr.flat());
		} else {
			let result = this.count;
			this.count = 0;
			return result;
		}

  }
}

module.exports = {
  DepthCalculator
};
