'use strict';
const sweetString = function() {};
sweetString.prototype.deleteSpaceAll = (str) => {
  return String.prototype.replace.call(str, /\s+/g, '');
}

sweetString.prototype.deleteSpaceLeft = (str) => {
  return String.prototype.replace.call(str, /^\s*/, '');
}

sweetString.prototype.deleteSpaceRight = (str) => {
  return String.prototype.replace.call(str, /(\s*$)/g, '');
}
sweetString.prototype.deleteSpace = (str, direction) => {
  if (direction === 'left') {
    return this.deleteSpaceLeft(str);
  }
  if (direction === 'right') {
    return this.deleteSpaceRight(str)
  }
  if (!direction || direction === 'all') {
    return this.deleteSpaceAll(str)
  }
}
