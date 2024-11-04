const solution = (str1, str2) => {
  let queue = [];
  for (let x of str1) {
    queue.push(x);
  }
  while (queue.length) {
    for (let x of str2) {
      if (queue.includes(x)) {
        if (queue.indexOf(x) === 0) {
          queue.shift();
        } else {
          return "NO";
        }
      }
    }
    return "YES";
  }
};

console.log(solution("CBA", "CDBGEA"));
