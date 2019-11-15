'use strict';
const sweetArray = function() {};

// 数组 取并集
sweetArray.prototype.intersect = function (arrays, key) {
  console.log(arrays);
  const num = 5;
  let arr = [];
  Array.prototype.forEach.call(arrays, function (item) {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      arr = arr.concat(item);
    } else {

    }
  });
  const map = new Map();
  if (key) {
    arr.forEach(function (item) {
      if (Object.prototype.toString.call(item) === '[object Object]') {
        if (item[key]) {
          map.set(item[key], item);
        } else {

          // const map = new Map();
          // const item = { a: { b: { c: { d: 1} } } };
          // key = 'd';


          // 循环
          // let hasVaule = false;
          let loop = true;
          let noneKey = true;
          let arr = [];
          const start = new Date().getTime();

          let loopNum = 0;
          // const loopKeyArr = [];
          while (new Date().getTime() - start < 3000) {
            console.log(arr.length)
            console.log(new Date().getTime() - start < 3000);


            for (let n = 0; n < loopNum; n += 1) {

            }

            let arrNext = [];
            for (let k in item) {
              if (item[k]) {
                arrNext.push(item[k])
              }
            }
            arr = arrNext;


            a: for (let i = 0; i < arr.length; i += 1) {
              for (let k in arr[i]) {
                if (arr[i][key]) {
                  map.set(arr[i][key], item);
                  loop = false;
                  noneKey = false;
                  break a;
                }
              }
            }

            console.log(arrNext);
            loopNum += 1;
            console.log(loopNum);
            // if (noneKey) {
            //   let arrNext = [];
            //   for (let k in item) {
            //     if (item[k]) {
            //       arrNext.push(item[k])
            //     }
            //   }
            //   arr = arrNext;
            //   console.log(arrNext);
            // }
          }

        }
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
