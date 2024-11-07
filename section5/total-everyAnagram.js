//title:해쉬,투포인터
//level:8

const checkMatch = (sH, tH) => {
  if (sH.size !== tH.size) return false;
  for (let [key, value] of sH) {
    if (!tH.has(key) || tH.get(key) !== value) {
      return false;
    }
  }
  return true;
};

const solution = (s, t) => {
  let count = 0;
  let sH = new Map();
  let tH = new Map();
  for (const x of t) {
    if (tH.has(x)) {
      tH.set(x, tH.get(x) + 1);
    } else {
      tH.set(x, 1);
    }
  }

  let len = t.length - 1;
  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    } else {
      sH.set(s[i], 1);
    }
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    } else {
      sH.set(s[rt], 1);
    }
    if (checkMatch(sH, tH)) count++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // console.log(sH);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return count;
};

console.log(solution("bacaAacba", "abc"));
