const solution = (str) => {
  let num = "";
  for (let x of str) {
    if (!isNaN(x)) {
      num += x;
    }
  }
  return Number(num);
};

console.log(solution("g0en2T0s8eSoft"));
