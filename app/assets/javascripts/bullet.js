(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (position, game) {
    this.color = "orange"
    this.radius = 7;
    this.vel = [0, 0];
    this.startPos = position.slice(0);
    this.game = game;
  };

  Bullet.inherit(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function () {
    var that = this;
    this.game.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that)) {
        that.game.removeAsteroid(asteroid);
        that.game.removeBullet(that);
      }
    });
  };

  Bullet.prototype.move = function() {
    Asteroids.MovingObject.prototype.move.call(this);
    this.hitAsteroids();
  };

})(this);
