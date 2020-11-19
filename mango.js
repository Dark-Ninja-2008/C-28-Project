class Mango{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");

        World.add(world, this.body);
      }

drop(){
  Mango.constructor.options = {
    isStatic:false
  }
}
      display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}