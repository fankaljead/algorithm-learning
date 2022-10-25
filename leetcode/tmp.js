// let s = "barfoothefoobarman";
// let sub = s.substring(0, 6);
// console.log(sub);
// console.log(sub.indexOf("bar", 2));

// let fourSum = [-3, -2, -1, 0, 0, 1, 2, 3];
// let fourSum = [1, 0, -1, 0, -2, 2];
// let fourSum = [2, 2, 2, 2, 2];
// let target = 0;
// let target = 8;

let fourSum = [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
    40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
    60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70,
    70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
    80, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
    90, 90, 90, 90, 90, 90, 90, 90, 90,
];
let target = 200;

let twoAdd = (arr = [], from = [], to = []) => {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            to.push(arr[i] + arr[j]);
            from.push([i, j]);
        }
    }
    return res;
};
let from = [],
    to = [];
twoAdd(fourSum, from, to);
console.log("from:", from);
console.log("to:", to);

let mapSum = function (nums = [], target = 0) {
    let res = [];
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; ++i) {
        let key = target - nums[i];

        if (map.has(key)) {
            res.push([map.get(key), i]);
        }
        map.set(nums[i], i);
    }
    return res;
};

let twoSum = (from = [], nums = [], target) => {
    let res = [];
    let map = new Map();
    let keys = [];
    for (let i = 0, len = from.length; i < len; ++i) {
        let key = target - nums[from[i][0]] - nums[from[i][1]];
        console.log("key:", key);
        if (map.has(key)) {
            map.get(key).push(from[i]);
        } else {
            map.set(key, [from[i]]);
            keys.push(key);
        }
    }
    keys.sort((a, b) => a - b);
    console.log("map:", map);
    console.log("keys:", keys);

    for (let i = 0; i < keys.length; i++) {
        // if (keys[i] === 0) {
        //     if (map.get(keys[i]).length === 1) {
        //         continue;
        //     } else {
        //         for (
        //             let j = 0, len = map.get(keys[i]).length;
        //             j < len - 1;
        //             j++
        //         ) {
        //             for (let k = j + 1; k < len; k++) {
        //                 let result = [
        //                     ...map.get(keys[i])[j],
        //                     ...map.get(keys[i])[k],
        //                 ].sort((a, b) => a - b);
        //                 res.push(result);
        //             }
        //         }
        //     }
        // }
        //  else {
        for (let j = 0; j < map.get(keys[i]).length; j++) {
            for (
                let k = 0;
                map.has(target - keys[i]) &&
                k < map.get(target - keys[i]).length;
                k++
            ) {
                let result = [
                    ...map.get(keys[i])[j],
                    ...map.get(target - keys[i])[k],
                ].sort((a, b) => a - b);
                res.push(result);
            }
        }
        // }
    }

    console.log("splice res:", res);

    let resSet = new Set();
    let r = [];
    for (let i = 0; i < res.length; i++) {
        let set = new Set(res[i]);
        if (set.size !== 4) {
            continue;
        }
        let num = [
            nums[res[i][0]],
            nums[res[i][1]],
            nums[res[i][2]],
            nums[res[i][3]],
        ].sort((a, b) => a - b);
        if (resSet.has(num.toString())) {
            continue;
        } else {
            resSet.add(num.toString());
            r.push(num);
        }
    }
    console.log("resSet:", resSet);

    console.log("res:", res);
    console.log("r:", r);
    return r;
};

// let res = twoSum(from, fourSum, target);

// let indexs = mapSum(to, target).sort((a, b) => a[0] - b[0]);

// console.log("indexs:", indexs);

// let fourSums = (from = [], indexs = []) => {
//     let res = [];
//     let set = new Set();
//     for (const index of indexs) {
//         let ii = [...new Set([...from[index[0]], ...from[index[1]]])].sort(
//             (a, b) => a - b
//         );
//         console.log("iid:", ii);
//         let arr = ii.map((v) => fourSum[v]).sort((a, b) => a - b);
//         if (arr.length === 4 && !set.has(arr.toString())) {
//             console.log("arr:", arr);
//             console.log("index:", index);
//             // res.push(arr);
//             res.push(arr);
//             set.add(arr.toString());
//         }
//     }

//     return res;
// };

// console.log("res:", fourSums(from, indexs, fourSum));
let a = [1, 1, 2, 3, 3];
let set = new Set(a);
// // set.add([1, 2, 3,3]);
// // // set.add([1, 2, 3]);
console.log(set);

// let s = [0, 1, 2, 3, 4, 4, 4, 3, 3].sort((a, b) => a - b);
// console.log(
//     "sort:",
//     s
// );
// console.log(new Set(s));
// s.splice(1, 1);
// console.log(s);

// let notMapSum = (nums = [], target = 0) => {
//     for (let i = 0; i < nums.length; i++) {
//         let minus = target - nums[i];
//         const index = nums.indexOf(minus);
//         if (index != i && index >= 0) {
//             return [index, i];
//         }
//     }
//     throw Error("No two sum solution.");
// };

// console.log(notMapSum([0, 0, 0], 0));

// console.log([1] == [1]);
// let set = new Set();
// set.add("hello");
// set.add("hello");
// console.log(set.has("hello"));
// let a = [1, 2, 4];
// set.add(a.toString());
// console.log(set);
// console.log(set.has(a.toString()));

let nums = [2, 2, 2, 2, 2];
let sset = new Set(nums);
for (const num of sset) {
    console.log(num);
    if (nums.lastIndexOf(num) - nums.indexOf(num) + 1 >= 4) {
        nums.splice(
            nums.indexOf(num),
            nums.lastIndexOf(num) - (nums.indexOf(num) - 1 + 4)
        );
    }
}
console.log(nums);
