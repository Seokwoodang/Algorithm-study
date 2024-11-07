//title:해쉬
//level:5

const solution = (str1, str2) => {
  let sH = new Map();
  for (const x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "No";
    sH.set(x, sH.get(x) - 1);
  }
  return "Yes";
};

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
