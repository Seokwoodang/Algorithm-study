//title:회의실배정
//level:6
//etc:끝시간에맞춰정렬

const solution = (arr) => {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else return a[1] - b[1];
  });
  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
