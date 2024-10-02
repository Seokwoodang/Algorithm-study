const solution = (str) => {
  let answer = "";
  for (const a of str) {
    answer += a.toUpperCase();
  }
  return answer;
};

console.log(solution("ItIsTimeToStudy"));
