const solution = (str) => {
  let answer;
  let sH = new Map();
  for (const x of str) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(sH.set(x, 1));
  }
  let max = 0;
  for (let [key, val] of sH) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

console.log(solution("BACBACCACCBDEDE"));
