/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums?.length || 0;

    if(len <= 1){
        return 1;
    }

    // 快慢指针
    let slow= 0;
    let fast = 1;

    
    while(fast <= len){
        // 如果 slow === fast 说明重复了，fast 需要前进
        if(nums[slow] === nums[fast]){
            fast++;
        } else {
            slow++
            // 如果 slow !== fast 说明 slow 应该被fast赋值
            nums[slow] = nums[fast]
            fast++
        }
    }
    return slow++
};
// @lc code=end

