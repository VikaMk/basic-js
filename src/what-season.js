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
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || (Object.getOwnPropertyNames(date).length > 0)) {
    throw Error("Invalid date!");
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let season = '';

  const month = date.getMonth();

  if (month > 1 && month < 5) {
    season = seasons[1];
  } else if (month > 4 && month < 8) {
    season = seasons[2];
  } else if (month > 7 && month < 11) {
    season = seasons[3];
  } else {
    season = seasons[0];
  }

  return season;
}

module.exports = {
  getSeason
};
