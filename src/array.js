'use strict';
const sweetArray = function() {};

// 数组 取并集
sweetArray.prototype.intersect = function (arrays, key) {
  console.log(arrays);
  let arr = [];
  Array.prototype.forEach.call(arrays, function (item) {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      arr = arr.concat(item);
    } else {

    }
  });
  const map = new Map();
  if (key) {
    arr.forEach(function (item, index) {
      if (Object.prototype.toString.call(item) === '[object Object]') {
        map.set(item[key], item);
      } else {
        throw Error('参数 key 存在时 ，子元素非 Object，目前仅支持子元素 同为 Object 类型！');
      }
    });
    return [ ...map.values() ];
  } else {
    arr.forEach(function (item, index) {
      map.set(item, index);
    });
    return [ ...map.keys() ];
  }
}
