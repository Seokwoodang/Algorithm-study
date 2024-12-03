//title:경로탐색_인접행렬
//level:7
//etc:[인접행렬_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EA%B7%B8%EB%9E%98%ED%94%84%EC%99%80-%EC%9D%B8%EC%A0%91%ED%96%89%EB%A0%AC-29)

const solution = (num, arr) => {
  let answer = 0;
  let graph = Array.from(Array(num + 1), () => Array(num + 1).fill(0));
  let ch = Array.from({ length: num + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === num) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= num; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
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
