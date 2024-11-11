//title:삽입정렬
//level:5
//etc:[삽입정렬_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%82%BD%EC%9E%85%EC%A0%95%EB%A0%AC-5)

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
  return arr;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
