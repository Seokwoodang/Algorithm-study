//title:투포인터
//level:5

const solution = (num, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let suming = i;
    let sum = 0;
    while (sum <= num) {
      sum += arr[suming];
      suming++;
      if (sum === num) {
        count++;
      }
    }
  }
  return count;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
