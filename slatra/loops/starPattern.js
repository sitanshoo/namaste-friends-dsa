// '*'
// '**'
// '***'
// '****'
let n1 = 4;

for (let i = 0; i < n1; i++) {
  let row = '';
  for (let j = 0; j < i + 1; j++) {
    row = row + '*';
  }
  //   console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let n2 = 5;
for (let i = 0; i < n2; i++) {
  let row = '';
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  //   console.log(row);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
let n3 = 5;
for (let i = 0; i < n3; i++) {
  let row = i + 1;
  for (let j = 0; j < i; j++) {
    row = row + `${i + 1}`;
  }
  // console.log(row);
}
//same same, but different
let n4 = 5;
for (let i = 0; i < n4; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  // console.log(row);
}

/************* i is used to set (top-bottom) rows, and j is to print values(left-right) *******************/

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let n5 = 5;
for (let i = 0; i < n5; i++) {
  let row = '';
  for (let j = 0; j < n5 - i; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}

// * * * * *
// * * * *
// * * *
// * *
// *
let n6 = 5;
for (let i = 0; i < n6; i++) {
  let row = '';
  for (let j = 0; j < n6 - i; j++) {
    row = row + '*';
  }
  // console.log(row);
}

//        *
//      * *
//    * * *
//  * * * *
//* * * * *
let n7 = 5;
for (let i = 0; i < n7; i++) {
  let row = '';
  for (let j = 0; j <= n7; j++) {
    j >= n7 - (i + 1) ? (row = row + '&') : (row = row + ' ');
  }
  // console.log(row);
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1 0
let n8 = 6;
for (let i = 0; i < n8; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row = j % 2 ? (row += '0') : (row += '1');
  }
  // console.log(row);
}

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
let n9 = 6;
let iterationCounter = 0;
for (let i = 0; i < n9; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row = iterationCounter % 2 ? (row += '0') : (row += '1');
    iterationCounter++;
  }
  console.log(row);
}
