
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper

var dustbin1, dustbin2, dustbin3

var ground

function preload()
{
	
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,70);
	
	ground = new Ground(800,600,10000000,20);
	
	dustbin1 = new Dustbin(500,580,100,10);

	dustbin2 = new Dustbin(450,550,10,50);

	dustbin3 = new Dustbin(550,550,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //keyPressed();
  drawSprites();
  paper.display();
  ground.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:109,y:-109});
	}
}