//title:섬나라아일랜드
//level:6
//etc:BFS

const solution = (map) => {
  let answer = 0;
  let n = map.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && map[nx][ny] === 1) {
              map[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        answer++;
        map[i][j] = 0;
      }
    }
  }
  return answer;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
