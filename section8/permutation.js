//title:순열구하기
//level:5
//etc:[순열_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%88%9C%EC%97%B4%EA%B5%AC%ED%95%98%EA%B8%B0-23)

const solution = (num, arr) => {
  let answer = [];
  let length = arr.length;
  let ch = Array.from({ length: length }, () => 0);
  let tmp = Array.from({ length: num });
  function DFS(n) {
    if (n === num) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[n] = arr[i];
          DFS(n + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
};

console.log(solution(2, [3, 6, 9]));
