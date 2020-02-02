class Square {
  constructor(x, y, num) {
    this.x = x;
    this.y = y;
    this.num = num;
  }
}

const boardArr = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const num = j + 1 + i * 4;
    const s = new Square(j * 50, i * 50, num);
    boardArr.push(s);
  }
}

boardArr[15].num = 0;

const reset = () => {
  const array = JSON.parse(JSON.stringify(boardArr));
  return array;
}

const shuffle = arr => {
  const array = JSON.parse(JSON.stringify(arr));
  let counter = array.length - 1;
  while (counter > 0) {
    const randIndex = Math.floor(Math.random() * counter);
    counter--;
    swap(array, counter, randIndex);
  }
  return array;
};

const swap = (arr, i, j) => {
  const tempNum = arr[i].num;
  arr[i].num = arr[j].num;
  arr[j].num = tempNum;
};

export { reset, shuffle, swap };
