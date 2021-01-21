class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=50;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
    var angle=this.body.angle;
    push (); 
    translate(pos.x, pos.y);
    rotate (angle);
    rectMode(CENTER);
    
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
      this.visibility-=2;
    }
  }
};
