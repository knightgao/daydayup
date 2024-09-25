/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;

    let left = 0;
    let right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);
        if(nums[mid] > target){
            right = mid - 1;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else {
            return mid
        }
    }

    return right + 1
};
// @lc code=end

