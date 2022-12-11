const f = (n) => {
  if (n < 3) {
    return n;
  }
  return f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3));
}

const fIter = (n) => {
  const f = (result, iter) => {
    if (iter > 3 || n < 3) {
      return result;
    }
    return f(result + iter * (n - iter), iter + 1)
  }
  return f(1, 1)
}