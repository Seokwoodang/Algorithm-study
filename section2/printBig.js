// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

const solution = (n, arr) => {
  let answer = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
