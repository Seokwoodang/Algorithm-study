// 왼쪽의 문자로부터 떨어진 거리를 먼저 구하고 오른쪽의 문자로부터 떨어진 거리를 구한다. (for문 두번)

const solution = (str, chr) => {
  let answer = [];
  let p = 1000;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === chr) {
      p = 0;
    } else {
      p++;
    }
    answer.push(p);
  }
  p = 1000;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === chr) {
      p = 0;
    } else {
      p++;
    }
    if (answer[j] > p) {
      answer[j] = p;
    }
  }
  return answer;
};

console.log(solution("teachermode", "e"));
