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
sweetObject.prototype.keyValueSwap = (obj) => {
  const keyValueSwapObj = {};
  for (let key in obj) {
    if (obj[key]) {
      keyValueSwapObj[obj[key]] = key
    }
  }
  return keyValueSwapObj;
}
