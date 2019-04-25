const objectLength = require('object-length');

module.exports = function lengthOf(value) {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  }
  return (value !== null && typeof value === 'object') ? objectLength(value) : undefined;
};
