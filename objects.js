// Car object
function carInfo(){
  var ma = prompt("Please enter car make", "Enter here");
  var mo = prompt("Please enter car model", "Enter here");
  var yr = prompt("Please enter car year", "Enter here");
  var co = prompt("Please enter car color", "Enter here");
  var car = {
    make: ma,
    model: mo,
    year: yr,
    color: co,
    speed: 65,
    all: function() {console.log("Your car is a " + this.color + " " + this.year + " " + this.make + " " + this.model + " "); },
    getSpeed: function() {
     return {
       accelerate: function() {
         car.speed += 10;
         return car.speed;
       },
       brake: function() {
         car.speed -= 7;
         return car.speed;
        }
      }
    }
  }
  return car;
}

//


// while loops and objects
function carInfo(){
  var car = {
    make: "Hyundai",
    model: "Elantra",
    year: "2005",
    color: "Red",
    speed: 0,
    accelerateLoop: function(){
      while (car.speed < 70) {
        car.speed += 1;
      }
      return car.speed;
    },
    decelerateLoop: function(){
      while (car.speed > 0) {
        car.speed -= 1;
      }
      return car.speed;
    },
    all: function() {console.log("Your car is a " + this.color + " " + this.year + " " + this.make + " " + this.model + " "); },
    getSpeed: function() {
     return {
       accelerate: function() {
         car.speed += 10;
         return car.speed;
       },
       brake: function() {
         car.speed -= 7;
         return car.speed;
        }
      }
    }
  }
  return car;
}
