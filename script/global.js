const TOTAL_BALLS = 200;
const BALL_RADIUS = 20;

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 600;

const COLORS = ['#F20574', '#A63268', '#383D59', '#37538C', '#7C629A'];

const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};

const distance = (x1, y1, x2, y2) => {
  const xDist = x1 - x2;
  const yDist = y1 - y2;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};

const randomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

let mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove', event => {
  mouse.x = event.x;
  mouse.y = event.y;
});
