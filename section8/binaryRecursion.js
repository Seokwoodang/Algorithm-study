//title:이진수_출력
//level:3
//etc:재귀함수

const solution = (num) => {
  let answer = "";
  function DFS(n) {
    if (n < 1) return;
    else {
      if (n % 2 === 1) {
        DFS(Math.floor(n / 2));
        answer += 1;
        // console.log(1);
      } else {
        DFS(Math.floor(n / 2));
        answer += 0;
        // console.log(0);
      }
    }
  }

  DFS(num);
  return answer;
};

console.log(solution(11));
// solution(11);
