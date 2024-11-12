//title:장난꾸러기_현수
//level:4
//etc:

/** 혼자 풀어보기 */
const solution = (arr) => {
  let count = 0;
  let hyun = 0;
  let pair = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1] && count === 0) {
      count++;
      hyun = i;
    } else if (arr[i] <= arr[i + 1] && arr[i] <= arr[i - 1]) {
      pair = i;
    }
  }
  return `키 정보 ${hyun}가 현수이고, ${pair}이 현수 짝꿍입니다.`;
};

/** 삽입정렬로 풀어보기 */
const solution2 = (arr) => {
  let origin = [...arr];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (tmp < arr[j]) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = tmp;
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== origin[k]) {
      answer.push(k + 1);
    }
  }
  return answer;
};

console.log(solution2([120, 125, 152, 130, 135, 135, 143, 127, 160]));

console.log(solution2([120, 130, 150, 150, 130, 150]));
