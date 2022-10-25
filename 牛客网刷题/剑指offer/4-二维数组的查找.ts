/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param target int整型
 * @param array int整型二维数组
 * @return bool布尔型
 */
export function Find(target: number, array: number[][]): boolean {
  // write code here
  function binarySearch(
    target: number,
    array: number[],
    left: number,
    right: number
  ): number {
    let mid = 0;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return mid;
  }

  for (let i = 0; i < array.length; i++) {
    let index = binarySearch(target, array[i], 0, array[i].length - 1);
    if (array[i][index] === target) {
      return true;
    }
  }
  return false;
}
