// Only recursion consumes extra stack space; loops do not.

//Print n to 1
let print = (n) => {
  if (n == 0) return;
  //   console.log(n);
  //n = n -1;
  print(--n);
};

let a = 10;
print(a);

//Print 1 to n
function printForward(n) {
  if (n == 0) return;
  printForward(--n);
  //   console.log(n + 1);
}

let b = 10;
printForward(b);

// sum of first n numbers
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
// console.log(sum(5));

//Sum of all elements in an Array
let arr = [5, 4, 2, 0, 1];
let i = 0;
// let sum = 0;
function sumOfArrElements(val) {
  console.log(val);
  if (i == arr.length - 1) return arr[i];
  return val + sumOfArrElements(arr[++i]);
}

console.log(sumOfArrElements(arr[i]));
