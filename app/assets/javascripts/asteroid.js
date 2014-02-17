

(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Asteroid = Asteroids.Asteroid = function (startPos, vel, radius, color) {
    Asteroids.MovingObject.call(this, startPos, vel, radius, color);
  };

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 10;
  Asteroid.MAX_SPEED = 5;



  var randomVec = function () {
    var xVelocity = Asteroid.MAX_SPEED * ((Math.random() * 2) - 1);
    var yVelocity = Asteroid.MAX_SPEED * ((Math.random() * 2) - 1);
    return [xVelocity, yVelocity];
  }

  Asteroid.randomAsteroid = function (dimX, dimY) {
    randX = dimX * Math.random();
    randY = dimY * Math.random();
    return new Asteroids.Asteroid([randX, randY],
                    randomVec(),
                    Asteroid.RADIUS,
                    Asteroid.COLOR);
  };

  Asteroid.inherit(Asteroids.MovingObject);
})(this);