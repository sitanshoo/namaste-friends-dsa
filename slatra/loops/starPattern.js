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
  console.log(row);
}
