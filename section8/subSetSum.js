//title:합이같은_부분집합
//level:6
//etc:이진트리(DFS)

const solution = (arr) => {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  let length = arr.length;
  let ch = Array.from({ length: length + 1 }, () => 0);
  function DFS(n, sum) {
    if (flag) return;
    if (n === length) {
      let tmp = [];
      for (let i = 0; i <= n + 1; i++) {
        if (ch[i] === 1) {
          if (total - sum === sum) {
            answer = "YES";
            flag = 1;
          }
        }
      }
    } else {
      ch[n] = 1;
      DFS(n + 1, sum + arr[n]);
      ch[n] = 0;
      DFS(n + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
