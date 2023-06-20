let numberArr = [1, 2, 3, 4];

function squareRoot(arr) {
  let sum = 0;
  let numbers = arr;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  let squareSum = Math.pow(sum, 2);
  let squreRoot = Math.sqrt(squareSum);
  return squreRoot;
}

console.log(`Square root is: ${squareRoot(numberArr)}`);
