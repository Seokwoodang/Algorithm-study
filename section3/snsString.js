const solutionOne = (str) => {
  str = str.toLowerCase();
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse === str ? true : false;
};

const solutionTwo = (str) => {
  str = str.toLowerCase();
  const length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(solutionTwo("gooG"));
