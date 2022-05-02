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
  let DNS = {};

  domains.forEach(domain => {
    const words = domain.split('.').reverse();
    let unit = '';

    words.forEach(el => {
      unit += `.${el}`;
      if (unit in DNS) {
        DNS[unit] = ++DNS[unit];
      } else {
        DNS[unit] = 1;
      }
    });
  })

  return DNS;
}

module.exports = {
  getDNSStats
};
