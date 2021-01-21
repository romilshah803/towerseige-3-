const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg;
var score=0;


function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(450,390,900,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
   
    //level one
    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);
  
    //set 2 for second stand
    //level one
    blocks1 = new Box(640,175,30,40);
    blocks2 = new Box(670,175,30,40);
    blocks3 = new Box(700,175,30,40);
    blocks4 = new Box(730,175,30,40);
    blocks5 = new Box(760,175,30,40);
    //level two
    blocks6 = new Box(670,135,30,40);
    blocks7 = new Box(700,135,30,40);
    blocks8 = new Box(730,135,30,40);
    //top
    blocks9 = new Box(700,95,30,40);
  
    //polygon holder with slings
    ball = new Ball(100,200,30);
    
    slingShot = new Slingshot(ball.body,{x:100,y:200});
  
  }
  function draw() {
     
    if(bg){
      background(bg);

  }else{
  
      background(0);
  }
      noStroke();
    textSize(35);
    fill ("red");
    text ("score: "+score,width-300,50);
    //Engine.update(engine);
    text(mouseX + ',' + mouseY, 10, 15);
    textSize(20);
    fill("lightyellow");
    text("Drag the polygon to destroy the blocks",300,30);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,350);
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();
    fill("gold");
    
 ball.display(); 
    slingShot.display();
    
  }
  function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.Fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
  }
  async function getbackground(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJ=await response.json();
    var date=responseJ.datetime;
    var hour=date.slice(11,13);
    if(hour<06&&hour>18){
    bg="yellow";
    }
    else{
    bg="blue";
    }
}