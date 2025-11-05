// Write a function that returns the number of negative numbers in an array
function countNegatives(arr) {
	// TODO
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) count++;
	}
	return count;
}

let arr = [-12, -9, 17, 8, 1, -10, -4, 8];
console.log(countNegatives(arr)); // 3

function secondLargest(arr) {
	let largest = -Infinity;
	let sLargest = -Infinity;

	if (!arr) return -1;
	if (arr && arr.length < 2) return -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			sLargest = largest;
			largest = arr[i];
		} else if (arr[i] > sLargest && arr[i] !== largest) {
			sLargest = arr[i];
		}
	}
	return sLargest;
}
let arr5 = [14, 92, 82, 234, 82, 7, 1234, 20, 18, 1234];
// let arr5 = [14, 92, 82, 234, 82, 7, 1234, 20, 18];
// let arr5 = [-14, -92, -82];
// let arr5 = [-14];
// let arr5 = [];
// let arr5 = null;
let result = secondLargest(arr5);
console.log(result);
