/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length;
    let left = 0;
    let right = len - 1;

    while(left < right){
        switchArray(left,right,s)
        left++;
        right--;
    }

};

const switchArray = (left,right,s) => {
    const temp = s[left];
    s[left] = s[right]
    s[right] = temp
}
// @lc code=end

