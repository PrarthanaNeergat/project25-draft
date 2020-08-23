const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,dustbin4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundSprite=createSprite(400,571,800,20);
groundSprite.shapeColor=color(255);

ground = new Ground(400,590,800,20);
paper = new Paper(500,580,40);
//130
dustbin1=new Dustbin(550,500,20,100);
dustbin2=new Dustbin(700,500,20,100);
dustbin3=new Dustbin(625,550,169,20);

//dustbin4=createSprite(625,550,169,20);
//dustbin4.shapeColor=color(0,96,255);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  console.log(dustbin3);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  //drawSprites();
  dustbin3.display();
  ground.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});

  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-150,y:150});

  }
}


