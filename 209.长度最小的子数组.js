/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    if(len === 0){
        return 0;
    }
    let start = 0;
    let minLen = Infinity;
    let sum = 0;
    for(let end = 0; end < len;end++){
        sum += nums[end];
        while(sum >= target){
            minLen = Math.min(minLen,(end-start+1));
            sum -= nums[start];
            start++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

// @lc code=end

