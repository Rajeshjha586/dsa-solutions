/**
 * Determines if a number is a happy number.
 *
 * Approach: Two Pointers / Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
 *
 * Pointer roles:
 *     - slowPointer: Moves forward one step (calculates sum of squared digits once per loop).
 *     - fastPointer: Moves forward two steps (calculates sum of squared digits twice per loop).
 *
 * Algorithm:
 *     - Repeatedly replace the number with the sum of the squares of its digits.
 *     - If the number reaches 1, it is a happy number (returns true).
 *     - If it enters an endless cycle (detected when the fast pointer meets the slow pointer
 *       without reaching 1), it is not a happy number (returns false).
 *
 * Time Complexity: O(log n) - The number of digits decreases logarithmically.
 * Space Complexity: O(1) - Uses a constant amount of extra memory for pointers.
 *
 * @param {number} n - A positive integer to check.
 * @returns {boolean} True if n is a happy number, false otherwise.
 */

function isHappyNumber(n) {
  function sumOfSquaredDigit(number) {
    let totalSum = 0;
    while (number > 0) {
      let digit = number % 10;
      number = Math.floor(number / 10);
      totalSum += digit ** 2;
    }
    // console.log("\t\tSum of squared digits: ", totalSum);
    return totalSum;
  }

  let slow_pointer = n;
  let fast_pointer = sumOfSquaredDigit(n);

  while (fast_pointer != 1 && slow_pointer != fast_pointer) {
    slow_pointer = sumOfSquaredDigit(slow_pointer);
    fast_pointer = sumOfSquaredDigit(sumOfSquaredDigit(fast_pointer));
  }

  if (fast_pointer === 1) {
    return true;
  }

  return false;
}

function main() {
  const inputs = [1, 5, 19, 25, 7];

  for (let i = 0; i < inputs.length; i++) {
    console.log(`${i + 1}.\tInput Number:${inputs[i]}`);
    console.log(`\tIs it a happy number? ${isHappyNumber(inputs[i])}`);
    console.log("-".repeat(100));
  }
}

main();
