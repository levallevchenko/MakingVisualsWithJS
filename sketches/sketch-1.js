import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.strokeStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

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
          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;

          getSquare(x, y, w, h);
          (Math.random() < 0.3) && getSquare(x + off / 2, y + off / 2, w - off, h - off);
        });
      });
    };

    getSquares();
  };
};

canvasSketch(sketch, settings);
