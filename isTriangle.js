const solution = (a, b, c) => {
  let maximum = a;
  let sum = a + b + c;
  if (a < b) {
    maximum = b;
  }
  if (maximum < c) {
    maximum = c;
  }
  if (sum - maximum < maximum) {
    return false;
  } else {
    return true;
  }
  //   if (a + b < c) {
  //     return false;
  //   }
  //   if (a + c < b) {
  //     return false;
  //   }
  //   if (b + c < a) {
  //     return false;
  //   }
  //   return true;
};

console.log(solution(13, 33, 17));
