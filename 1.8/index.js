const square = (x) => x ** 2;

const average = (x, y) => (x + (y * 2)) / 3;

const improve = (guess, x) => {
  const sqr = square(guess)
  return average(x / sqr, guess);
}

const isGoodEnough = (guess, x) => Math.abs(guess - x) < 0.0000001;

const sqrtIter = (guess, x) => {
  const improvedGuess = improve(guess, x)
  if (isGoodEnough(guess, improvedGuess)) {
    return guess;
  } else {
    return sqrtIter(improvedGuess, x);
  }
}

const cubeRoot = (x) => {
  return sqrtIter(1.0, x);
}