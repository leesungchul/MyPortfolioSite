
(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship();
    this.bullets = [];
  };

  Game.prototype.addAsteroids = function (numAsteroids) {
    for(var i = 0; i < numAsteroids; i++) {
      this.asteroids.push
        (Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that.ship)) {
        alert("You're DEAD!");
        that.stop();
      }
    });
  };

  Game.prototype.bindKeyHandlers = function () {
    var that = this;
    key('w', function () {
      that.ship.power([0, -1]);
    });
    key('s', function () {
      that.ship.power([0, 1]);
    });
    key('d', function () {
      that.ship.power([1, 0]);
    });
    key('a', function () {
      that.ship.power([-1, 0]);
    });
    key('space', function () {
      that.bullets.push(that.ship.fireBullet(that));
    });
  };

  Game.prototype.stop = function() {
    window.clearInterval(this.intervalID);
  };

  Game.DIM_X = 700;
  Game.DIM_Y = 700;
  Game.FPS = 50;

  Game.prototype.draw = function() {
    var that = this;
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
    this.bullets.forEach(function(bullet) {
      if (bullet.startPos[0] < 0 ||
            bullet.startPos[0] > Game.DIM_X ||
            bullet.startPos[1] < 0 ||
            bullet.startPos[1] > Game.DIM_Y) {
        that.removeBullet(bullet);
      } else {
        bullet.draw(that.ctx);
      }
    });
    this.ship.draw(that.ctx);
  };

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.bullets.forEach(function(bullet) {
      bullet.move();
    });
    this.ship.move();
  };

  Game.prototype.removeAsteroid = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
    console.log(this.asteroids);
    console.log(this.asteroids.length);
  };

  Game.prototype.removeBullet = function(bullet) {
    this.bullets.splice(this.bullets.indexOf(bullet), 1);
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
  };

  Game.prototype.start = function() {
    var game = this;
    this.addAsteroids(5);
    this.bindKeyHandlers();

    this.intervalID = window.setInterval(function() {

      game.step();
      game.checkCollisions();
      if (game.asteroids.length === 0) {
        alert("You Win")
        game.stop();
      }
    }, Game.FPS);
  };

})(this);