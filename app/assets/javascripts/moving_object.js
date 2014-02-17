(function(root) {

  var Asteroids = root.Asteroids = ( root.Asteroids || {} );

  var MovingObject = Asteroids.MovingObject = function (startPos, vel, radius, color) {
    this.startPos = startPos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  var checkBounds = function (coord) {
    if (this.startPos[coord] < 0) {
      this.startPos[coord] = 700;
    } else if (this.startPos[coord] > 700) {
      this.startPos[coord] = 0;
    } else {
      this.startPos[coord] += this.vel[coord];
    }
  }
  MovingObject.prototype.move = function () {
    var that = this;
    [0, 1].forEach(function(coord) {
      checkBounds.call(that, coord);
    });
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.startPos[0],
      this.startPos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var xDist = otherObject.startPos[0] - this.startPos[0];
    var yDist = otherObject.startPos[1] - this.startPos[1];
    var totalDist = Math.sqrt(Math.pow(xDist,2) + Math.pow(yDist,2));

    return totalDist < (this.radius + otherObject.radius);
  };


})(this);