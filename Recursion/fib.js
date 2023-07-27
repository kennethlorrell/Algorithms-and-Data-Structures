const fib = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n];
  }

  return n <= 2
    ? 1
    : memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

// console.log(fib(1000));
