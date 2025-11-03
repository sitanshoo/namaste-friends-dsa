/* 
Question1
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
*/
let n = 5;

for (let i = 0; i < n; i++) {
	let row = "";
	let count = 1;
	for (let j = n - i; j > 0; j--) {
		row = row + `${count}`;
		count++;
	}
	// console.log(row);
}

let n1 = 5;

for (let i = 0; i < n1; i++) {
	let row = "";
	for (let j = 1; j <= n1 - i; j++) {
		row = row + j;
	}
	// console.log(row);
}

/* 
Question2
// * * * * *
// * * * *
// * * *
// * *
// *
*/
let n2 = 5;

for (let i = 0; i < n2; i++) {
	let row = "";
	for (let j = 0; j < n2 - i; j++) {
		row += "*";
	}
	// console.log(row);
}

/* 
Question3
//        *
//      * *
//    * * *
//  * * * *
// * * * * *
*/

let n3 = 5;
for (let i = 0; i < n; i++) {
	let row = "";
	for (let j = 1; j <= n; j++) {
		row += j >= n - i ? "*" : " ";
	}
	// console.log(row);
}

// Question4
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1 0
let n4 = 6;

for (let i = 0; i < n4; i++) {
	let row = "";
	for (let j = 0; j <= i; j++) {
		row += j % 2 ? 0 : 1;
	}
	// console.log(row);
}

let n5 = 6;
let count = 0;
for (let i = 0; i < n4; i++) {
	let row = "";
	for (let j = 0; j <= i; j++) {
		row += count % 2 ? 0 : 1;
		count++;
	}
	console.log(row);
}
