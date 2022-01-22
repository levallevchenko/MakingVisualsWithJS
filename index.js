const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.lineWidth = 4;

const WIDTH = 60;
const HEIGH = 60;
const GAP = 20;
const SQUARES_COUNT = 5;
let x, y;

const squaresArray = new Array(SQUARES_COUNT).fill();

const getSquare = (x, y, width, height) => {
  context.beginPath();
  context.rect(x, y, width, height);
  context.stroke();
}

const getSquares = () => {
  squaresArray.forEach((_, i) => {
    squaresArray.forEach((_, j) => {
      x = 100 + (WIDTH + GAP) * i;
      y = 100 + (HEIGH + GAP) * j;

      getSquare(x, y, WIDTH, HEIGH);
      (Math.random() < 0.3) && getSquare(x + 8, y + 8, WIDTH - 16, HEIGH - 16);
    });
  });
};


setInterval(() => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  getSquares();
}, 1000);
