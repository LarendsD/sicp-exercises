const square = (a) => {
  return a**2;
};

const sumOfSquares = (a, b) => square(a) + square(b);

const solution = (a, b, c) => {
  if (a >= c && b >= c) {
    return sumOfSquares(a, b)
  } else if (b >= a && c >= a) {
    return sumOfSquares(b, c)
  } else {
    return sumOfSquares(a, c);
  }
}