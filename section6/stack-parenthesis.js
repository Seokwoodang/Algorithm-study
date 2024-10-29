// 스택은 입구와 출구가 동일한 친구를 말한다. 그렇다면 나중에 들어온 친구가 입구에 가장 가까우므로 나갈때는 반대의 순서로 나가야 한다.
// 스택 문제를 풀 때는 배열을 세로로 세운다는 생각으로 풀도록 하자. 배열 기준 push 와 pop!

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
