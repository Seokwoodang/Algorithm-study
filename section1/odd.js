// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
// 중 최소값을 찾는 프로그램을 작성하세요

const solution = (arr) => {
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (const a of arr) {
    if (a % 2 === 1) {
      answer += a;
      if (min > a) {
        min = a;
      }
    }
  }

  return [answer, min];
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
