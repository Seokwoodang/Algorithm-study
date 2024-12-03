//title:조합_구하기
//level:5
//etc:조합

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, S) {
    if (L === m) {
      answer.push(tmp);
    } else {
      for (let i = S; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  return answer;
};

console.log(solution(4, 2));
