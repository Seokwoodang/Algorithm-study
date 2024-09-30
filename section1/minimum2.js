// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

const solution = (list) => {
  // for...of 문 돌리기
  // let answer = list[0];
  // for (const a of list) {
  //   if (answer > a) answer = a;
  // }

  // 내장함수 활용하기 Math.min
  let answer = Math.min(...list);
  return answer;
};

console.log(solution([1, 2, 3, 4, 0, 6, 7]));
