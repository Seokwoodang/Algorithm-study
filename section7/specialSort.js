//title:SpecialSort-버블정렬
//level:2

const solution = (arr) => {
  let bubble = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (bubble[j] > 0 && bubble[j + 1] < 0) {
        [bubble[j], bubble[j + 1]] = [bubble[j + 1], bubble[j]];
      }
    }
  }
  return bubble;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
