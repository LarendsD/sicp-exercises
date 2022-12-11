const isGoodEnough = (guess, x) => Math.abs(guess -x) < 0.0001;

const average = (x, y) => (x + y) / 2;

const improve = (guess, x) => average(guess, x / guess);

const sqrtIter = (guess, x) => {
  const impovedGuess = improve(guess, x);
  if (isGoodEnough(guess, impovedGuess)) {
    return guess;
  } else {
    return sqrtIter(impovedGuess, x);
  };
};

const squareRoot = (x) => sqrtIter(1.0, x);