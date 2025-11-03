let num = 1;
function countDigit(n) {
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    //The key difference is that Math.floor() rounds a number down to the nearest whole integer, while Math.round() rounds to the nearest integer using standard rounding rules (0.5 or greater rounds up, less than 0.5 rounds down).
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigit(num));
