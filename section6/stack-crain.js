//title:스택
//level:6

// 내 풀이
const solution = (arr1, arr2) => {
  let answer = 0;
  let stack = [];
  let len = arr1.length;
  for (const x of arr2) {
    for (let i = 0; i < len; i++) {
      if (arr1[i][x - 1] !== 0) {
        stack.push(arr1[i][x - 1]);
        arr1[i].splice(x - 1, 1);
        arr1[i].splice(x - 1, 0, 0);
        break;
      }
    }
    for (let i = 1; i < stack.length; i++) {
      if (stack[i] === stack[i - 1]) {
        stack.splice(i - 1, 2);
        answer += 2;
      }
    }
  }
  return answer;
};

// 해설
const solution2 = (board, move) => {
  let answer = 0;
  let stack = [];
  let len = board.length;
  for (const x of move) {
    for (let i = 0; i < len; i++) {
      if (board[i][x - 1] !== 0) {
        let tmp = board[i][x - 1];
        board[i][x - 1] = 0;
        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  }
  return answer;
};

console.log(
  solution2(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
