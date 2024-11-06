//title:부분정렬
//level:4

const solution = (arr) => {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (answer[index] > arr[j]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return answer;
};

console.log(solution([13, 5, 11, 7, 23, 15]));

const sample = [
  { name: "강석우", age: 28, address: "경기도" },
  { name: "김철수", age: 20, address: "경기도" },
  { name: "예병수", age: 42, address: "경기도" },
];
