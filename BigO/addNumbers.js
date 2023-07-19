const addUpTo = (n) => {
  let total = 0;

  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUpTo2 = (n) => {
  return n * (n + 1) / 2;
}

console.log(addUpTo2(100));