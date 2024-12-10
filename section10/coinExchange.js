//title:동전교환
//level:7
//etc:냅색알고리즘

const solution = (coin, num) => {
  let dy = Array.from({ length: num + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i] - 1; j < dy.length; j++) {
      if (dy[j] > dy[j - coin[i]] + 1) dy[j] = dy[j - coin[i]] + 1;
    }
    console.log(dy);
  }
  return dy[num];
};

console.log(solution([1, 2, 5], 15));
