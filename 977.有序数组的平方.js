/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // 平方后排序，可能存在 正数 负数
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    // [left,right] 是有意义的
    const result = new Array(len).fill('')
    while(len){
        const _left = square(nums[left])
        const _right = square(nums[right])

        _left > _right ? left++ : right--;
        result[len-1] = _left > _right ? _left : _right

        len--;
    }
    return result
};

const square = (value)=>{
    return value * value
}
// @lc code=end

