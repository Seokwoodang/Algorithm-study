//title:결혼식
//level:6
//etc:정렬및분리

const solution = (arr) => {
  let temp = [];
  let count = 0;
  let maxCount = 0;
  for (let x of arr) {
    temp.push([x[0], "s"], [x[1], "e"]);
  }
  temp.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else return a[0] - b[0];
  });
  for (const x of temp) {
    if (x[1] === "s") {
      count++;
      if (maxCount < count) maxCount = count;
    } else count--;
  }
  return maxCount;
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
