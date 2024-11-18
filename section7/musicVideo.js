//title:뮤직비디오
//level:7
//etc:이분검색응용

const count = (songs, capacity) => {
  let count = 1;
  let single = 0;
  for (let i = 0; i < songs.length; i++) {
    if (single + songs[i] <= capacity) {
      single += songs[i];
    } else {
      count++;
      single = songs[i];
    }
  }
  return count;
};

const solution = (num, songs) => {
  let answer;
  let sum = songs.reduce((acc, val) => acc + val);
  let lt = Math.floor(sum / num);
  let rt = sum;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= 3) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
