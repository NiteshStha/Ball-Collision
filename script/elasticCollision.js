/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual ball1
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

const rotate = (velocity, angle) => {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
};

/**
 * Swaps out two colliding balls' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | ball1      | A ball1 object with x and y coordinates, plus velocity
 * @param  Object | ball2 | A ball1 object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

const resolveCollision = (ball1, ball2) => {
  const xVelocityDiff = ball1.velocity.x - ball2.velocity.x;
  const yVelocityDiff = ball1.velocity.y - ball2.velocity.y;

  const xDist = ball2.x - ball1.x;
  const yDist = ball2.y - ball1.y;

  // Prevent accidental overlap of ball1s
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding ball1s
    const angle = -Math.atan2(ball2.y - ball1.y, ball2.x - ball1.x);

    // Store mass in var for better readability in collision equation
    const m1 = ball1.mass;
    const m2 = ball2.mass;

    // Velocity before equation
    const u1 = rotate(ball1.velocity, angle);
    const u2 = rotate(ball2.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = { x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2), y: u1.y };
    const v2 = { x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2), y: u2.y };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap ball1 velocities for realistic bounce effect
    ball1.velocity.x = vFinal1.x;
    ball1.velocity.y = vFinal1.y;

    ball2.velocity.x = vFinal2.x;
    ball2.velocity.y = vFinal2.y;
  }
};
