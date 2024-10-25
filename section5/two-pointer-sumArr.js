// sort로 처리하면 쉽지만 sort를 사용하면 n log n 의 비용이 들기 때문에 n + m의 비용이 드는 반복문을 통해 투 포인터를 사용한다.

const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p2]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
