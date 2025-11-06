// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
const arr = [0, 1, 0, 3, 12];
function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //   let temp = nums[x];
      //   nums[x] = nums[i];
      //   nums[i] = temp;
      [([nums[i], nums[x]] = [nums[x], nums[i]])];
      x++;
    }
  }
  return nums;
}

const res = moveZeros(arr);
console.log(res);

//temp = a[x]
//a[x] = a[i]
//a[i] = temp

//test = [1,5,7,6,9]
