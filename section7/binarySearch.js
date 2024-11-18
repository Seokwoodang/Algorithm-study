//title:이분검색
//level:5
//etc:[이분검색_블로그정리](https://inblog.ai/luke/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-33865#%EC%9D%B4%EB%B6%84%EA%B2%80%EC%83%89-13)

const solution = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else if (arr[mid] < target) {
      lt = mid + 1;
    }
  }
  return answer;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
