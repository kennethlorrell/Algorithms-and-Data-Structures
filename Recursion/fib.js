const fib = (n) => {
  return n <= 2
    ? 1
    : fib(n-1) + fib(n-2);
}

console.log(fib(10));