//title:부분집합구하기
//level:6
//etc:이진트리(DFS)

const solution = (num) => {
  let answer = "";
  let ch = Array.from({ length: num + 1 }, () => 0);
  function DFS(n) {
    if (n === num + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i;
      }
      console.log(tmp);
    } else {
      ch[n] = 1;
      DFS(n + 1);
      ch[n] = 0;
      DFS(n + 1);
    }
  }
  DFS(1);
};

console.log(solution(3));
