//title:재귀함수
//level:2
//etc:[재귀함수_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98-17)

const solution = (num) => {
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(n - 1);
      console.log(n);
    }
  }

  DFS(num);
};

solution(3);
