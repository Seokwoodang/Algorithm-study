const solution = (num, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let j = i;
    while (num >= sum) {
      sum += arr[j++];
      if (num >= sum) {
        count++;
      }
    }
  }
  return count;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
