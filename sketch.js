
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbin1, dustbin2, dustbin3;




/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255);

	ground = Bodies.rectangle(width/2, 680, width, 10 , {restitution:0, isStatic:true} );
 	World.add(world, ground);


	 dustbin1 = new Dustbin(575, 670, 200, 20,);
	
	 dustbin2 = new Dustbin(485, 610, 20, 100);
	 dustbin3 = new Dustbin(665, 610, 20, 100);
	
	 paperObject= new Paper(200, 0, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25, y:-25});
	}
}

