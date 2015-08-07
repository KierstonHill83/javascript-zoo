var Animal = require("./animal.js");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};

Zoo.prototype.open = function() {
  this.status = "open";
};

Zoo.prototype.close = function() {
  this.status = "closed";
};

Zoo.prototype.isOpen = function() {
  if(this.status === "open") {
    return "Open!";
  } else {
    return "closed";
  }
};

Zoo.prototype.addAnimal = function(animal) {
  var output = this.animals.indexOf(animal);
  if(this.status === "open" && animal instanceof Animal && output === -1) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  var output = this.animals.indexOf(animal);
  if(this.status === "open" && output > -1) {
    this.animals.splice(output, 1);
  }
};

module.exports = Zoo;
