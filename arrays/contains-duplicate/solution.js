/**
 * Problem: Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears
 * more than once in the array. Otherwise, return false.
 *
 * Examples:
 * Input:  nums = [1, 2, 3, 3]
 * Output: true
 *
 * Input:  nums = [1, 2, 3, 4]
 * Output: false
 */

/* ============================================================
 * Approach 1: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * ============================================================ */

function hasDuplicateSet(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

/* ============================================================
 * Approach 2: Sorting
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) depending on sorting implementation
 * ============================================================ */

function hasDuplicateSort(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      return true;
    }
  }

  return false;
}

/* ============================================================
 * Approach 3: Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * ============================================================ */

function hasDuplicateBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

/* ============================================================
 * Test
 * ============================================================ */

console.log(hasDuplicateSet([1, 2, 3, 4, 2]));
console.log(hasDuplicateSort([1, 2, 3, 4, 2]));
console.log(hasDuplicateBruteForce([1, 2, 3, 4, 2]));
