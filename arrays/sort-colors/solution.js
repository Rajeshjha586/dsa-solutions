/**
 * @param {number[]} colors
 * @return {void} Do not return anything, modify colors in-place instead.
 *
 * Sorts an array containing only 0s, 1s, and 2s in place.
 * Approach: Three Pointers (Dutch National Flag Algorithm)
 * Pointer roles:
 *    - low: Boundary for the next 0.
 *    - mid: Index of the current element being examined.
 *    - high: Boundary for the next 2.
 * Algorithm:
 *  - If colors[mid] is 0,
 *      swap it with colors[low] and increment both low and mid.
 *  - If colors[mid] is 1, increment mid.
 *  - If colors[mid] is 2,
 *      swap it with colors[high] and decrement high.
 *      Do not increment mid because the swapped element has not been examined yet.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function sortColors(colors) {
  let low = 0;
  let mid = 0;
  let high = colors.length - 1;

  while (mid <= high) {
    if (colors[mid] === 0) {
      [colors[low], colors[mid]] = [colors[mid], colors[low]];
      low += 1;
      mid += 1;
    } else if (colors[mid] === 1) {
      mid += 1;
    } else {
      [colors[mid], colors[high]] = [colors[high], colors[mid]];
      high -= 1;
    }
  }

  return colors;
}

function main() {
  const testCases = [
    [1, 2, 0],
    [0],
    [2, 2, 1, 1, 0, 0],
    [1, 0, 2, 1, 0, 2, 1],
    [2, 1, 0, 0, 1, 2, 2, 0, 1],
  ];

  testCases.forEach((colors, index) => {
    const inputCopy = [...colors];

    sortColors(colors);

    console.log(`${index + 1}.\tInput array: [${inputCopy}]`);
    console.log(`\tResult: [${colors}]`);
    console.log("-".repeat(100));
  });
}

main();
