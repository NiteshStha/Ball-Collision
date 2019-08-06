class Ball {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4
    };
    this.mass = 10;
    this.radius = radius;
    this.ctx = ctx;
    this.color = randomColor();
  }

  draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.globalAlpha = 0.8;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  };

  move = () => {
    if (this.x + this.radius > CANVAS_WIDTH || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius > CANVAS_HEIGHT || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw();
  };
}
