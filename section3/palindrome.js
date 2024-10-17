const solution = (str) => {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if (str.split("").reverse().join("") === str) {
    return "Yes";
  } else {
    return "No";
  }
};

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
