/*
 * @Author: Zhou Xianghui
 * @Date: 2022-08-21 16:11:29
 * @LastEditors: Zhou Xianghui
 * @LastEditTime: 2022-08-21 16:13:59
 * @FilePath: \算法\网格遍历dfs.js
 * @Description:
 * after a long, long, long time
 * Copyright (c) 2022 by Zhou Xianghui/Qianjiang Tech, All Rights Reserved.
 */
function isArea(grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}

function dfs(grid, r, c) {
  if (!isArea(grid, r, c)) {
    return;
  }
  if (grid[r][c] !== 1) {
    return;
  }
  // 将grid[r][c]置为 2，表示已经访问过了
  grid[r][c] = 2;
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}
