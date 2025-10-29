// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
// arr.indexOf()
let arr = [4, 2, 0, 10, 8, 30];

function searchElement(num) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      result = i;
      break;
    }
  }

  return result;
}

console.log(searchElement(102));

// Write a function that returns the number of negative numbers in an array
function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr1 = [2, -9, -17, 8, 1, -10, -4, 8];
console.log(countNegatives(arr1));
