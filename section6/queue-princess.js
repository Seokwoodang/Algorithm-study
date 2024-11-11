//title:큐
//level:5
//etc:
//큐는_입구와_출구가_각각_하나씩으로_들어온친구가_먼저_나가는_구조로_되어있다._배열을_잘_활용하자.

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
