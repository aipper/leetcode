/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let [index, item] of nums.entries()) {
    if (map.has(target - item)) {
      return [map.get(target - item), index]
    }
    map.set(item, index)
  }
  return []
}
