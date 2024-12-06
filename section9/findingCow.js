//title:송아지찾기
//level:7
//etc:BFS

const solution = (start, end) => {
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[start] = 1;
  queue.push(start);
  dis[start] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === end) {
        return dis[x] + 1;
      }
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
};

console.log(solution(5, 14));
