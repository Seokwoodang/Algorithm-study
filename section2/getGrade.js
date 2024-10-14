const solution = (arr) => {
  let answer = [1, 1, 1, 1, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
};

console.log(solution([87, 89, 92, 100, 76]));
