'use strict';
const sweetObject = function() {};
// 删除 空值
sweetObject.prototype.deleteNullValue = (obj) => {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === '' || obj[key] === undefined) {
      delete obj.key;
    }
  }
  return obj
}

// 键值 互换

sweetObject.prototype.keyValueSwapString = (obj) => {
  const keyValueSwapObj = {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === 'string') {
      keyValueSwapObj[obj[key]] = key
    }
  }
  return keyValueSwapObj;
}

sweetObject.prototype.keyValueSwapSymbol = (obj) => {
  const keyValueSwapObj = {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === 'symbol') {
      keyValueSwapObj[obj[key]] = key
    }
  }
  return keyValueSwapObj;
}

sweetObject.prototype.keyValueSwapNumber = (obj) => {
  const keyValueSwapObj = {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === 'number') {
      keyValueSwapObj[obj[key]] = key
    }
  }
  return keyValueSwapObj;
}

sweetObject.prototype.keyValueSwapAll = (obj) => {
  const keyValueSwapObj = {};
  for (let key in obj) {
    if (obj[key] && (['symbol', 'number', 'string'].includes(obj[key]))) {
      keyValueSwapObj[obj[key]] = key
    }
  }
  return keyValueSwapObj;
}
