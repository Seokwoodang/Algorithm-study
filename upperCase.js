const solution = (str) => {
  let answer = 0;
  for (const a of str) {
    const num = a.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
};

console.log(solution("KoreaTimeGood"));
