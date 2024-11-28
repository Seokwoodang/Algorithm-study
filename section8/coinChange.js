//title:동전교환
//level:6
//etc:(DFS_Cut_Edge_Tech)

const solution = (coin, change) => {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(count, left) {
    if (left < 0 || count > answer) return;
    if (left === 0) {
      if (answer > count) {
        answer = count;
      }
    } else if (left > 0) {
      for (let i = 0; i < coin.length; i++) {
        DFS(count + 1, left - coin[i]);
      }
    }
  }

  DFS(0, change);
  return answer;
};

console.log(solution([1, 2, 5], 15));
