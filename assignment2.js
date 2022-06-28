function stepCounter(num) {
  let result = helper(num, 0);
  console.log(result);
}

function helper(num, steps) {
  if (num == 0) return steps;
  let subVal = splitter(num);
  return helper(num - subVal, steps + 1);
}

function splitter(num) {
  if (num < 10) return num;
  let max = Number.NEGATIVE_INFINITY;
  while (num != 0) {
    let rem = num % 10;
    max = Math.max(rem, max);
    num = Math.floor(num / 10);
  }

  return max;
}

stepCounter(18);
