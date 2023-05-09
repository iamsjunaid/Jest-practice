const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') {
    throw Error('Not a string');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalizeFirstLetter;