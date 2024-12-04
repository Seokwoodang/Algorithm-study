//title:미로탐색
//level:7
//etc:인접행렬

const solution = (arr) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x < 0 && y < 0) return;
    if (x === 6 && y === 6) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 0) {
          arr[x][y] = 1;
          DFS(nx, ny);
          arr[x][y] = 0;
        }
      }
    }
  }

  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
};

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
