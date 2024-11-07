//title:버블정렬
//level:3
//설명 : 버블정렬은 이중포문에서 bubble[j]와 bubble[j+1]을 비교하며 한칸씩 큰걸 뒤로 미뤄주는 형식으로 한다. 따라서 i 하나를 돌게되면 가장 큰 숫자가 맨 뒤로 밀리게 된다. 밀린 숫자들 만큼은 덜돌려줘도 되기 때문에 j문의 중간 값은 arr.length - 1 -i 가 된다.

const solution = (arr) => {
  let bubble = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [bubble[j], bubble[j + 1]] = [bubble[j + 1], bubble[j]];
      }
    }
  }
  return bubble;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
