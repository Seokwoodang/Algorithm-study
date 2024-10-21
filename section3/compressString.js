const solution = (str) => {
  let answer = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      answer += str[i];
      count !== 1 && (answer += count);
      count = 1;
    } else {
      count++;
    }
  }
  return answer;
};

console.log(solution("KKHSSSSSSSE"));
