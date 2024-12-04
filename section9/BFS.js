//title:이진트리(BFS)
//level:3
//etc:[넓이우선탐색_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EB%84%93%EC%9D%B4%EC%9A%B0%EC%84%A0%ED%83%90%EC%83%89-bfs-37)

const solution = () => {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [2 * v, 2 * v + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
};

console.log(solution());
