//Leetcode 26
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDups(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}

const res = removeDups(arr1);
// console.log(res);

//Leetcode 27
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

const arr2 = [3, 2, 2, 3];
const arr3 = [0, 1, 2, 2, 3, 0, 4, 2];

function removeOccurences(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  return x;
}

const res2 = removeOccurences(arr2, 3);
console.log(res2);

//Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
  let length = s.length - 1;
  let halfLength = Math.floor(s.length / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];

    s[i] = s[length - i];
    s[length - i] = temp;
  }
}
const strArr = ['h', 'e', 'l', 'l', 'o'];
const res3 = reverseString(strArr);

//swapping
// a = [12, 45]
// temp = a[0]
// a[0] = a[1]
// a[1] = temp
