//title:팩토리얼
//level:3
//etc:DFS

const solution = (num) => {
  function DFS(n) {
    if (n === 1) return 1;
    else return DFS(n - 1) * n;
  }
  return DFS(num);
};

console.log(solution(5));
