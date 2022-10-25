// const s = "hello";

// for (const c of s) {
//   console.log(c);
// }

// let arr = [1, 2, 3];

// let sum = arr.reduce((pre, cur) => cur + pre);

// console.log(sum);

// function solution(nums = [1, -1, 3, -1, -1, 2, 5], hand = 12) {
//   let flag = true,
//     len = nums.length;
//   for (let i = len - 1; i >= 1; --i) {
//     if (nums[i] !== -1) {
//       const pI = Math.ceil(i / 2) - 1;

//       if (nums[i] > 5 || nums[pI] === -1) {
//         flag = false;
//         break;
//       }
//     }
//   }

//   if (flag) {
//     let sum = 0,
//       count = 0;
//     nums.forEach((num) => {
//       if (num >= 0) {
//         sum += num;
//         count++;
//       }
//     });
//     const gap = count * 5 - sum - hand;
//     if (gap >= 0) {
//       console.log(flag);
//       console.log(gap);
//       return;
//     } else {
//       console.log(flag);
//       console.log(0);
//       return;
//     }
//   }

//   console.log(flag);
//   console.log(0);
//   return;
// }

// solution();
// solution([1, -1, 3, 2, 0], 10);

// function solution(arr = []) {
//   let len = arr.length;
//   let arr_max = Math.max(...arr);

//   const newArr = new Array(len + 1).fill(0);

//   let count = 1;
//   for (let i = 0; i < len; i++) {
//     count = arr[i] * count;

//     if (count == 0) {
//       newArr[i + 1] = count;
//       count = 1;
//     } else {
//       newArr[i + 1] = count;
//     }
//   }
//   let newMax = Math.max(...newArr);

//   if (newMax < arr_max) {
//     let index = arr.indexOf(arr_max);
//     console.log([index + 1, index + 1].join(" "));
//   } else {
//     let indexMax = newArr.indexOf(newMax);
//     let zero_index = newArr.slice(0, indexMax).lastIndexOf(0);

//     if (zero_index !== -1) {
//       console.log([zero_index + 1, indexMax].join(" "));
//     } else {
//       console.log([1, indexMax].join(" "));
//     }
//   }
// }

function solution(arr = [1, 2, 4, 0, 8]) {
  let map = new Map([
    [1, 0],
    [2, 1],
    [4, 2],
    [8, 3],
    [16, 4],
    [32, 5],
    [64, 6],
    [128, 7],
    [256, 8],
    [512, 9],
    [1024, 10],
  ]);
  let res = [0, 0],
    start = 0,
    end = 0,
    len = arr.length,
    max = 0,
    sum = 0;
  for (let i = 0; i < len; ++i) {
    if (arr[i] !== 0) {
      sum += map.get(arr[i]);
    } else {
      end = i - 1;
      if (sum > max) {
        res[0] = start;
        res[1] = i - 1;
        max = sum;
      }
      sum = 0;
      while (arr[i] === 0 && i < len) {
        i++;
      }

      start = i--;
    }
  }
  console.log(res.map((num) => num + 1).join(" "));
}

const readArray = () => {
  const line = readline();
  return line.split(" ").map(Number);
};
// 读取一行为一个数字
const readInt = () => {
  return parseInt(readline());
};
function main() {
  let n = readInt();
  for (let i = 0; i < n; ++i) {
    const m = readInt();
    const arr = readArray();
    solution(arr);
  }
}

// main();
solution();
solution([1, 2, 4, 8, 0, 256, 0]);
solution([1, 2, 4, 8, 0, 256, 0, 512, 1, 2]);
