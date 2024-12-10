//title:돌다리건너기
//level:4
//etc:동적계획법

const solution = (num) => {
  let dy = Array.from({ length: num + 2 });
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[num + 1];
};

console.log(solution(7));
