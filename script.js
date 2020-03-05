let Rat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;



    this.sound = function () {
        return ('chit chit')
    };
    this.setSpeed = function (rat_speed) {
        this.speed = rat_speed;
    }
};

let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.sound = function () {
        return ('meo meo')
    };

    this.eatRat = function (rat) {
        if(rat.status == true){
            this.weight = this.weight+rat.weight;
       }
    };

    this.setSpeed = function (cat_speed) {
        this.speed = cat_speed;
    };

    this.catchRat = function (rat) {
      if (rat.speed < this.speed){
          alert('Caught')
      }  else {
          alert('Not enough speed to catch');
      }
    };
};

let rat = new Rat('Jerry',10,70);
let cat = new Cat('Tom',15,60);

function catch_mouse() {
    cat.catchRat(rat);
}

function eat_mouse() {
    cat.eatRat(rat);
}