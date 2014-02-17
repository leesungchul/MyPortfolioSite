Function.prototype.inherit = function(superClass) {
  function Surrogate (){};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
};