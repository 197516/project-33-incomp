const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var jonny,sophia;
var Snow,snowman,bgimg;
function preload(){
bgimg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(1000,600);


 Snow = new snow(200,0)
  
}

function draw() {
  background(bgimg);
  Snow.display();  
  drawSprites();
 
  
}