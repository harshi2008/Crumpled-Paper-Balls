const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2;
var stick1, stick2, stick3, stick4, stick5, stick6;
var ball1;

function preload(){

}

function setup(){
	createCanvas(1270, 600);
	
	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(700, 230, 1500, 20);
	ground2 = new Ground(700, 500, 1500, 20);

	stick1 = new Stick(950, 213,  185, 10);
	stick2 = new Stick(860, 163,  10, 110);
	stick3 = new Stick(1045, 163,  10, 110);
	
	stick4 = new Stick(950, 483,  185, 10);
	stick5 = new Stick(860, 433,  10, 110);
	stick6 = new Stick(1045, 433,  10, 110);

	ball1 = new Paperball(400, 180, 40);
	ball2 = new Paperball(400, 450, 40);
}

function draw(){
	background("violet");
	rectMode(CENTER);
	Engine.update(engine);
	
	fill("maroon");
	textSize(20);
	text("Press SPACE to move the upper ball and press 'u' to move the lower ball", 200, 50);
	ground1.display();
	ground2.display();

	stick1.display();
	stick2.display();
	stick3.display();
	stick4.display();
	stick5.display();
	stick6.display();

	ball1.display();
	ball2.display();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85, y:-85})
	}

	if(keyCode===117){
		Matter.Body.applyForce(ball2.body, ball2.body.position, {x:85, y:-85})
	}
}













