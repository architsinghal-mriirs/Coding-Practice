function stepCounter(num) {
  let steps = helper(num, 0);
  console.log(steps);
  return steps;
}

function helper(num, steps) {
  if (num == 1) return steps;
  if (num % 2 == 0) {
    return helper(num / 2, steps + 1);
  }
  if (num % 3 == 0) {
    return helper(num / 3, steps + 1);
  }
  return helper(num - 1, steps + 1);
}

stepCounter(10);
