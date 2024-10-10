const solution = (str) => {
  // 함수 로직을 여기에 추가하세요
  let mid = Math.floor(str.length / 2);

  return str.substring(mid, mid + 1); // 예시로 입력받은 문자열을 반환
};

console.log(solution("1234567"));
