const solution = (num, arr) => {
  let answer = 0;
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        list.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  list.sort((a, b) => b - a);
  answer = list[num - 1];
  return answer;
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
