const solution = (num, arr) => {
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < arr.length; i++) {
    let price = num - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > price) break;
      if (j !== i && arr[j][0] + arr[j][1] <= price) {
        price -= arr[j][0] + arr[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
};

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
