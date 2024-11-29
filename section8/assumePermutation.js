//title:수열_추측하기
//level:8
//etc:순열,이항계수

const solution = (num, last) => {
  let answer;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let b = Array.from({ length: num }, () => 0); // 조합 계산해두기
  let p = Array.from({ length: num }, () => 0);
  let ch = Array.from({ length: num + 1 }, () => 0);
  let flag = 0;
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === num && sum === last) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= num; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < num; i++) {
    b[i] = combi(num - 1, i);
  }
  DFS(0, 0);
  return answer;
};

console.log(solution(4, 16));
