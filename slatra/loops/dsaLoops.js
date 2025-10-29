//Ques1
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

//Ques2
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

//Ques3
// Write a function that returns the largest number in an array
let arr2 = [5, 0, 10, 8, 17, 1, -20];

function findLargest(arr) {
  let largest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest(arr2));

//Ques4
// Write a function that returns the smallest number in an array
let arr3 = [5, 0, 10, 8, 17, 1, -20];

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    console.log(smallest, i);

    if (smallest > arr[i]) {
      //smallest=5, 0,
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest(arr2));
