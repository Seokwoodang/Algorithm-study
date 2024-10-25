const solution = (num, arr) => {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i + 1] - arr[i - 1];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
