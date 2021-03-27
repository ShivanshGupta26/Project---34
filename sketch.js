//Create variables here
var database;

function preload()
{
	//load images here
  pet.addImage("")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  
}


function draw() {  

  drawSprites();
  //add styles here

}



