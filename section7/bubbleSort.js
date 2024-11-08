//title:버블정렬
//level:3
//etc:버블정렬은_이중포문에서_bubble[j]와_bubble[j+1]을_비교하며_한칸씩_큰걸_뒤로_미뤄주는_형식으로_한다._따라서_i_하나를_돌게되면_가장_큰_숫자가_맨_뒤로_밀리게_된다._밀린_숫자들_만큼은_덜돌려줘도_되기_때문에_j문의_중간_값은_arr.length_-_1_-i_가_된다.

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
