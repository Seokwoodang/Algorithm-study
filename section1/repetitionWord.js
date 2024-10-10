const solution = (n, arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.indexOf(arr[i])) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution(5, ["good", "time", "good", "time", "student"]));
