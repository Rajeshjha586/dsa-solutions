"""
Problem: Find the Largest Number

Given a list of integers, find and return the largest number.

Example:
    Input:  nums = [1, 8, 7, 56, 90]
    Output: 90

Time Complexity: O(n)
Space Complexity: O(1)
"""

def laregestNumber(nums: list[int]) -> int:
    result = nums[0]
    for num in nums:
        if num > result:
            result = num
    return result

num = [1, 8, 7, 56, 90]

print(laregestNumber(num))