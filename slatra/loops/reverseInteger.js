let num = 120;

function revInt(n) {
  let nCopy = Math.abs(n);
  let rev = 0;

  while (nCopy > 0) {
    let rem = nCopy % 10;
    rev = 10 * rev + rem;
    nCopy = Math.floor(nCopy / 10);
  }
  return n > 0 ? rev : -rev;
}
console.log(num, revInt(num));

//Math.pow(2, 31) === 2**31 -> 2 to the power of 31
