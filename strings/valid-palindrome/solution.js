/**
 * @param {string} s
 * @return {boolean}
 *
 * Checks whether a string is a valid palindrome.
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isAlphanumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function main() {
  const testCases = [
    "A man, a plan, a canal: Panama",
    "race a car",
    "1A@2!3 23!2@a1",
    "No 'x' in Nixon",
    "12321",
  ];

  for (const test of testCases) {
    console.log("\tString:", test);

    const result = isPalindrome(test);

    console.log("\tResult:", result);
    console.log("-".repeat(100));
  }
}

main();
