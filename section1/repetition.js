const solution = (str) => {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) {
      answer += str[i];
    }
  }
  return answer;
};

console.log(solution("ksekkset"));
