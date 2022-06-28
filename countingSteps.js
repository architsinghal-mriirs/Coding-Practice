function countToZero(num, steps) {
  if (num == 0) return steps;
  if (num % 2 == 0) {
    return countToZero(num / 2, steps + 1);
  }
  return countToZero(num - 1, steps + 1);
}

let num = 14;
let steps = 0;
let result = countToZero(num, steps);

console.log(result);
