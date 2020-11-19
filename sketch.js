
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var ground;
var tree;
var kid;
var stone;
var rod;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,485,800,30);
	tree = new Tree(640,320,300,300);
	kid = new Kid(100,400,150,150);
	stone = new Stone(60,390,25,25)
    rod = new Rod(kid.body,stone.body)
    mango1 = new Mango(640,300,40,40);
    mango2 = new Mango(600,250,40,40);
    mango3 = new Mango(680,250,40,40);
    mango4 = new Mango(720,300,40,40);
    //mango5 = new Mango(560,300,40,40);
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ground.display();
  tree.display();
  kid.display();
  stone.display();
  rod.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  //mango5.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});

}

function mouseReleased(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}





