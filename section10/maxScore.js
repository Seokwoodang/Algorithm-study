//title:최대점수구하기
//level:7
//etc:냅색을이용한조합

const solution = (maxTime, arr) => {
  let dy = Array.from({ length: maxTime + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = maxTime; j >= pt; j--) {
      // 시간이 초과 되지 않으면.
      // 점수가 적으면
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
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
