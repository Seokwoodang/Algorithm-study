//title:중복순열
//level:5
//etc:재귀함수

const solution = (num, repete) => {
  let answer = [];
  let temp = Array.from({ length: repete }, () => 0);
  function DFS(n) {
    if (n === repete) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= num; i++) {
        temp[n] = i;
        DFS(n + 1);
      }
    }
  }

  DFS(0);
  return answer;
};

console.log(solution(3, 2));
