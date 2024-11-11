//title:스택
//level:5
//etc:
//스택은_입구와_출구가_동일한_친구를_말한다.스택_문제를_풀_때는_배열을_세로로_세운다는_생각으로_풀도록_하자._배열_기준_push_와_pop!

const solution = (str) => {
  let stack = [];
  for (const x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) {
        console.log("n");
        return "No";
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length > 0) {
    return "No";
  }
  return "Yes";
};

console.log(solution("((()()(()))())"));
