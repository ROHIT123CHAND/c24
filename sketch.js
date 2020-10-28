
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
var line1,line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    line1=new Dustbin (560,559,100,0)
	line2=new Dustbin (400,559,100,0)
	line3=new Dustbin (477,585,200,PI/2)

	
	//Create the Bodies Here.
paper = new Ball(100,100,40)

ground = new Ground(400,600,width,20)
	
	/*BoxLeftBody = Bodies.rectangle(320,610,20,100,  { isStatic:true});
	World.add(world,BoxLeftBody);
	//console.log(BoxLeftBody)


	BoxRightBody = Bodies.rectangle(500,610,20,100,  { isStatic:true});
	World.add(world,BoxRightBody);

	BoxDownBody = Bodies.rectangle(410,653,200,20,  { isStatic:true});
	World.add(world,BoxRightBody);*/

	Engine.run(engine);
  
	//console.log(BoxLeftBody)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //console.log(BoxLeftBody)

line1.display();
line2.display();
line3.display();
paper.display();
ground.display();

//rect(BoxLeftBody.position.x,BoxLeftBody.position.y,300,20);
//rect(BoxRightBody.position.x,BoxRightBody.position.y,300,20);


text(mouseX+","+mouseY,mouseX,mouseY)
  //drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-80}); } }



