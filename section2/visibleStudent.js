const solution = (arr) => {
  let maxHeight = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      count++;
      maxHeight = arr[i];
    }
  }
  return count;
};

console.log(solution([130, 135, 140, 148, 140, 145, 150, 150, 153]));
