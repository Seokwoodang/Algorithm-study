//title:이진트리순회
//level:3
//etc:[깊이우선탐색_블로그](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%9D%B4%EC%A7%84%ED%8A%B8%EB%A6%AC%EC%88%9C%ED%9A%8C-dfs-%EA%B9%8A%EC%9D%B4%EC%9A%B0%EC%84%A0%ED%83%90%EC%83%89--20)

const solution = (v) => {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); // 전위 순회
      DFS(v * 2);
      //   console.log(v); // 중위 순회
      DFS(v * 2 + 1);
      //   console.log(v); // 후위 순회
    }
  }

  DFS(v);
  return answer;
};

solution(1);
