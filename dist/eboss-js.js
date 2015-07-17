
/*
  EXAMPLE Class
 */

(function() {
  var EXAMPLE;

  EXAMPLE = (function() {
    function EXAMPLE() {
      this.property = true;
    }

    EXAMPLE.prototype.method = function() {
      return this.property;
    };

    return EXAMPLE;

  })();

}).call(this);


/*
  index
 */

(function() {
  var indexExample;

  indexExample = new EXAMPLE();

}).call(this);
