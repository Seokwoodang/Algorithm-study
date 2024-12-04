//title:경로탐색_인접행렬
//level:7
//etc:[인접리스트_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EA%B7%B8%EB%9E%98%ED%94%84%EC%99%80-%EC%9D%B8%EC%A0%91%EB%A6%AC%EC%8A%A4%ED%8A%B8-33)

const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);
  return answer;
};

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
