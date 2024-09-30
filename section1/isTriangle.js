// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

const solution = (a, b, c) => {
  let maximum = a;
  let sum = a + b + c;
  if (a < b) {
    maximum = b;
  }
  if (maximum < c) {
    maximum = c;
  }
  if (sum - maximum < maximum) {
    return false;
  } else {
    return true;
  }
  //   if (a + b < c) {
  //     return false;
  //   }
  //   if (a + c < b) {
  //     return false;
  //   }
  //   if (b + c < a) {
  //     return false;
  //   }
  //   return true;
};

console.log(solution(13, 33, 17));
