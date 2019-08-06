const CollisionDetection = (ball, balls) => {
  for (let i = 0; i < balls.length; i++) {
    if (ball !== balls[i]) {
      if (distance(ball.x, ball.y, balls[i].x, balls[i].y) - BALL_RADIUS * 2 < 0) {
        resolveCollision(ball, balls[i]);
      }
    }
  }
};
