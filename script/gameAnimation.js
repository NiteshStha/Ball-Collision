class GameAnimation {
  constructor() {
    this.canvas = document.getElementById('canvasElement');
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext('2d');
    this.balls = [];
    this.init();
  }

  init = () => {
    for (let i = 0; i < TOTAL_BALLS; i++) {
      let radius = BALL_RADIUS; //getRandomValue(5, 10);
      let x = Math.random() * (CANVAS_WIDTH - radius * 2) + radius;
      let y = Math.random() * (CANVAS_HEIGHT - radius * 2) + radius;

      if (i !== 0) {
        for (let j = 0; j < this.balls.length; j++) {
          if (distance(x, y, this.balls[j].x, this.balls[j].y) - radius * 2 < 0) {
            x = Math.random() * (CANVAS_WIDTH - radius * 2) + radius;
            y = Math.random() * (CANVAS_HEIGHT - radius * 2) + radius;
            j = -1;
          }
        }
      }
      this.balls.push(new Ball(x, y, radius, this.ctx));
    }
  };

  startGame = () => {
    this.startEngine = requestAnimationFrame(this.startGame);

    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (var i = 0; i < this.balls.length; i++) {
      const ball = this.balls[i];
      CollisionDetection(ball, this.balls);
      this.balls[i].move();
    }
  };
}

const game = new GameAnimation().startGame();
