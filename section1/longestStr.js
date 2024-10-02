// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

const solution = (n, arr) => {
  let answer = arr[0];
  for (let i = 1; i < n; i++) {
    if (answer.length < arr[i].length) {
      answer = arr[i];
    }
  }
  return answer;
};

console.log(solution(5, ["teacher", "time", "hello", "seokwoodang", "hyunah"]));
