(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function () {
    this.color = Ship.COLOR;
    this.radius = Ship.RADIUS;
    this.startPos = Ship.START_POS
    this.vel = [0, 0];
  };
  Ship.inherit(Asteroids.MovingObject);

  Ship.RADIUS = 10;
  Ship.COLOR = 'blue';
  Ship.BULLET_SPEED = 10;
  Ship.START_POS = [Asteroids.Game.DIM_X/2, Asteroids.Game.DIM_Y/2];

  // Ship.prototype.draw = function() {};
//
//   Ship.prototype.move = function() {};
  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function (game) {
    var bullet = new Asteroids.Bullet(this.startPos, game);
    var speed = Math.sqrt(Math.pow(this.vel[0],2) + Math.pow(this.vel[1],2));
    bullet.vel = [(Ship.BULLET_SPEED * this.vel[0]) / speed,
                   (Ship.BULLET_SPEED * this.vel[1]) / speed];
    return bullet;
  }
})(this);