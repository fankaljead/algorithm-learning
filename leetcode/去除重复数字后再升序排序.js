// 去除重复数字后再升序排序

let deleteDuplicateNumber = (
    nums = [3, 4, 5, 1, 3, 3, 4, 7, 8, 9, 5, 4, 6]
) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let index = nums.indexOf(nums[i], j);
            if (index > 0) {
                nums.splice(index, 1);
            }
        }
    }

    return nums.sort((a, b) => a - b);
};

let deleteDuplicateNumber2 = (nums = []) => {
    nums.sort((a, b) => a - b);
    let pre = nums[0];
    for (let i = 1; i < nums.length;) {
        if (nums[i] == pre) {
            nums.splice(i, 1);
        } else {
            pre = nums[i++];
        }
    }
    return nums;
}
console.log(deleteDuplicateNumber2());
console.log(deleteDuplicateNumber2([3, 4, 5, 1, 3, 3, 4, 7, 8, 9, 5, 4, 6]));
console.log(deleteDuplicateNumber2([3, 4, 5, 1, 3, 3, 4, 7, 8, 9, 5, 4, 6, 6]));
console.log(deleteDuplicateNumber2([4, 6, 6]));

// let nums = [4, 1, 6]
// nums.sort((a, b) => a - b);
// console.log(nums);