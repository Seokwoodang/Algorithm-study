//title:마구간정하기
//level:8
//etc:이분검색

const count = (stable, mid) => {
  let count = 1;
  let now = stable[0];
  for (let x of stable) {
    if (x - now >= mid) {
      count++;
      now = x;
    }
  }
  return count;
};

const solution = (horse, stable) => {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = stable[0];
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) < horse) {
      rt = mid - 1;
    } else if (count(stable, mid) >= horse) {
      answer = mid;
      lt = mid + 1;
    }
  }
  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
