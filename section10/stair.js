//title:계단오르기
//level:4
//etc:동적계획법

const solution = (stair) => {
  let dy = Array.from({ length: stair + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < stair + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[7];
};

console.log(solution(7));
