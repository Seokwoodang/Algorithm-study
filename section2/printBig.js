const solution = (n, arr) => {
  let answer = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
