"""
Determines if a number is a happy number.

Approach: Two Pointers / Floyd's Cycle-Finding Algorithm (Tortoise and Hare)

Pointer roles:
    - slow_pointer: Moves forward one step (calculates sum of squared digits once per loop).
    - fast_pointer: Moves forward two steps (calculates sum of squared digits twice per loop).

Algorithm:
    - Repeatedly replace the number with the sum of the squares of its digits.
    - If the number reaches 1, it is a happy number (returns True).
    - If it enters an endless cycle (detected when the fast pointer meets the slow pointer 
      without reaching 1), it is not a happy number (returns False).

Time Complexity: O(log n) - The number of digits decreases logarithmically.
Space Complexity: O(1) - Uses a constant amount of extra memory for pointers.

Args:
    n: A positive integer to check.

Returns:
    True if n is a happy number, False otherwise.
"""

def is_happy_number(n: int) -> bool:
    def sum_of_squared_digits(number):
        total_sum = 0
        while number > 0:
            number, digit = divmod(number, 10)
            total_sum += digit ** 2
        # print("\t\tSum of squared digits: ", total_sum)
        return total_sum
    
    slow_pointer = n
    fast_pointer = sum_of_squared_digits(n)

    while fast_pointer != 0 and slow_pointer != fast_pointer:
        slow_pointer = sum_of_squared_digits(slow_pointer)
        fast_pointer = sum_of_squared_digits(sum_of_squared_digits(fast_pointer))

    if fast_pointer == 1:
        return True
    
    return False

print("--1--", is_happy_number(7))

def main():
    inputs = [1, 5, 19, 25, 7]
    for i in range(len(inputs)):
        print(i+1, ".\tInput Number: ", inputs[i], sep="")
        print("\tIs it a happy number? ", is_happy_number(inputs[i]))
        print("-" * 100)


if __name__ == '__main__':
    main()
