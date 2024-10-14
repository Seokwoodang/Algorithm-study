// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요

const solution = (arr1, arr2) => {
  const answer = arr1.map((value, idx) => {
    if (value === arr2[idx]) return "D";
    else if (value === 1 && arr2[idx] === 3) return "A";
    else if (value === 2 && arr2[idx] === 1) return "A";
    else if (value === 3 && arr2[idx] === 2) return "A";
    else return "B";
  });

  return answer;
};

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 만약 비교가 복잡해보이는 경우가 있다면 하나를 기준으로 잡고 한개씩 없애갈것.
