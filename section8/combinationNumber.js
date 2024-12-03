//title:수들의_조합
//level:6
//etc:조합

const solution = (k, arr, m) => {
  let answer = 0;
  let tmp = Array.from({ length: arr.length }, () => 0);
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
};

console.log(solution(3, [2, 4, 5, 8, 12], 6));
