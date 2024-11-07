//title:큐
//level:5

// 큐는 입구와 출구가 각각 하나씩으로 들어온친구가 먼저 나가는 구조로 되어있다. 배열을 잘 활용하자.

const solution = (total, num) => {
  let answer;
  let prince = [];
  for (let i = 1; i <= total; i++) {
    prince.push(i);
  }
  while (prince.length) {
    for (let i = 1; i < num; i++) {
      prince.push(prince.shift());
    }
    prince.shift();
    if (prince.length === 1) answer = prince.shift();
  }
  return answer;
};

console.log(solution(8, 3));
