//title:조합의_경우수
//level:5
//etc:[조합_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%A1%B0%ED%95%A9-dfs--24)

const solution = (n, r) => {
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  return DFS(n, r);
};

console.log(solution(5, 3));
console.log(solution(33, 19));
