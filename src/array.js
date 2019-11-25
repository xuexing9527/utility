'use strict';
const sweetArray = function() {};

// 数组 根据存在key的数组元素 去重(后元素取代前元素) 合并
sweetArray.prototype.intersect = function (arrays, key) {
  const start = new Date().getTime();
  console.log(arrays);
  const num = 5;
  let arr = [];
  Array.prototype.forEach.call(arrays, function (item) {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      arr = arr.concat(item);
    } else {

    }
  });
  console.log(arr);
  const map = new Map();
  if (key) {
    for (let arrKey in arr) {
      const item = arr[arrKey];
      console.log(1);
      if (Object.prototype.toString.call(item) === '[object Object]') {
        if (item[key]) {
          map.set(item[key], item);
        } else {
          const r = function (obj) {
            console.log('我进了递归...')
            if (obj[key]) {
              map.set(obj[key], item);
            } else {
              for (let k in obj) {
                if (obj[k]) {
                  return r(obj[k]);
                }
              }
            }
          }
          for (let k in item) {
            if (item[k]) {
              r(item[k]);
            }
          }
        }
      } else {
        throw Error('参数 key 存在时 ，子元素非 Object，目前仅支持子元素 同为 Object 类型！');
      }
    }
    console.log(`${new Date().getTime() - start} ms 完成`)
    return [ ...map.values() ];
  } else {
    arr.forEach(function (item, index) {
      map.set(item, index);
    });
    return [ ...map.keys() ];
  }
}


const l = function (num) {
  const start = new Date().getTime();
  const f = function (n1, n2, n) {
    if (n > 0) {
      if (!n) {
        console.log(`用时${new Date().getTime() - start} ms`);
        return;
      }
      const value = n1 + n2;
      console.log(value)
      if (n == 1 || n == 2) {
        console.log(1);
      }
      return f(n2, value, n - 1);
    }
  }
  f(1, 1, num)
}
