/**
 * Problem: Find the Largest Number
 *
 * Given an array of integers, find and return the largest number.
 *
 * Example:
 * Input:  nums = [1, 8, 7, 56, 90]
 * Output: 90
 */

/* ============================================================
 * Approach 1: Linear Search
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * ============================================================ */

function laregestNumber(nums) {
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > result) {
      result = nums[i];
    }
  }

  return result;
}

nums = [1, 8, 7, 56, 90];
console.log(laregestNumber(nums));
