const solution = (arr) => {
  let answer = 0;
  let maxSum = 0;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
    if (sum > maxSum) {
      maxSum = sum;
      answer = x;
    } else if (sum === maxSum) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
