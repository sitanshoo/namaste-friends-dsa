// Write a function that returns the number of negative numbers in an array
function countNegatives(arr) {
	// TODO
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) count++;
	}
	return count;
}

let arr = [-2, -9, 17, 8, 1, -10, -4, 8];
console.log(countNegatives(arr)); // 3
