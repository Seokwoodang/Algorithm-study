//N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

const solution = (arr) => {
  let max = 0;
  let diagonal = 0;
  let reversediagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    let horizontal = 0;
    let vertical = 0;
    for (let j = 0; j < arr[0].length; j++) {
      horizontal += arr[i][j];
      vertical += arr[j][i];
    }
    if (max < horizontal) {
      max = horizontal;
    } else if (max < vertical) {
      max = vertical;
    }
    diagonal += arr[i][i];
    reversediagonal += arr[arr.length - i - 1][i];
  }
  if (max < diagonal) {
    max = diagonal;
  }
  console.log("aaa", reversediagonal);
  return max;
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
