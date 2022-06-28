function power(n, base) {
  if (n == 0) return 1;
  return base * power(n - 1, base);
}

let result = power(4, 3);
console.log(result);
