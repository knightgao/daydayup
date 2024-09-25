/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    if(len <= 1){
        return nums
    }

    let slow = 0;
    let fast = 0;


    while(fast < len){
        if(nums[fast] === 0){
            fast++
        } else {
            nums[slow] = nums[fast]
            slow++
            fast++
        }
    }
    
    while(slow < len){
        nums[slow] = 0;
        slow++;
    }

    return nums
};
// @lc code=end

