//title:최대점수_구하기
//level:6
//etc:DFS

const solution = (time, arr) => {
  let maxScore = 0;
  let length = arr.length;
  function DFS(index, sumScore, sumTime) {
    if (sumTime > time) return;
    if (index === length) {
      maxScore = Math.max(maxScore, sumScore);
    } else {
      DFS(index + 1, sumScore + arr[index][0], sumTime + arr[index][1]);
      DFS(index + 1, sumScore, sumTime);
    }
  }

  DFS(0, 0, 0);
  return maxScore;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
