const solution = (a, b, c) => {
  let minimum = a;
  if (b < minimum) {
    minimum = b;
  }
  if (c < minimum) {
    minimum = c;
  }
  return minimum;
};

console.log(solution(2, 5, 1));
