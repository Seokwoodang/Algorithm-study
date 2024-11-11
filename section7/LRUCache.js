//title:LRU(삽입정렬응용)
//level:5

const solution = (size, arr) => {
  let answer = new Array(5).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    if (answer.includes(tmp)) {
      for (let j = answer.indexOf(tmp); j >= 1; j--) {
        [answer[j - 1], answer[j]] = [answer[j], answer[j - 1]];
      }
    } else {
      answer.unshift(tmp);
      answer.pop();
    }
  }
  return answer;
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
