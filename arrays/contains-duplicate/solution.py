"""
Problem: Contains Duplicate

Given an integer array nums, return True if any value appears
more than once in the array. Otherwise, return False.

Examples:
    Input:  nums = [1, 2, 3, 3]
    Output: True

    Input:  nums = [1, 2, 3, 4]
    Output: False
"""


# ============================================================
# Approach 1: Hash Set
# Time Complexity: O(n)
# Space Complexity: O(n)
# ============================================================

def has_duplicate_set(nums: list[int]) -> bool:
    seen = set()

    for num in nums:
        if num in seen:
            return True

        seen.add(num)

    return False


# ============================================================
# Approach 2: Sorting
# Time Complexity: O(n log n)
# Space Complexity: O(n) with sorted()
# ============================================================

def has_duplicate_sort(nums: list[int]) -> bool:
    # Sort a copy if original order matters
    sorted_nums = sorted(nums)

    for i in range(1, len(sorted_nums)):
        if sorted_nums[i] == sorted_nums[i - 1]:
            return True

    return False


# ============================================================
# Approach 3: Brute Force
# Time Complexity: O(n²)
# Space Complexity: O(1)
# ============================================================

def has_duplicate_brute_force(nums: list[int]) -> bool:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True

    return False


# ============================================================
# Test
# ============================================================

nums = [1, 2, 3, 4, 8]

print(has_duplicate_set(nums))
print(has_duplicate_sort(nums))
print(has_duplicate_brute_force(nums))