//title:투포인터
//level:5

const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = (p2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return answer;
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
