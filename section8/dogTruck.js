//title:바둑이_승차
//level:4
//etc:이진트리(DFS)

const solution = (num, arr) => {
  let maxWeight = 0;
  let length = arr.length;
  function DFS(index, sum) {
    if (index === length) {
      if (sum > maxWeight && sum < num) {
        maxWeight = sum;
      }
    } else {
      DFS(index + 1, sum + arr[index]);
      DFS(index + 1, sum);
    }
  }

  DFS(0, 0);
  return maxWeight;
};

console.log(solution(258, [81, 58, 42, 33, 61]));
