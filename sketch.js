var trilhaImg,trilha;


var jakeImg,jake;

var parede1,parede2;

function preload(){
  //imagens pré-carregadas
  
  trilhaImg = loadImage("trilha.png");
  
  jakeImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
  
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
  
  

  trilha = createSprite(200,200,20,20);
  trilha.addImage("caminho",trilhaImg);
  trilha.velocityY = 4;
  trilha.scale = 1.2;
  
  jake = createSprite(200,300,400,400);
  jake.addAnimation("jake1",jakeImg);
  
  parede1 = createSprite(370,200,20,400);
  parede2 = createSprite(35,200,20,400);
  
}



function draw() {
  background(100);

  edge = createEdgeSprites();
  
  if( trilha.y > 400){
    trilha.y = height /2;
  }
  jake.x = World.mouseX;
  
  jake.collide(edge);
  jake.collide(parede1);
  jake.collide(parede2);
  
  parede1.visible = false;
  parede2.visible = false;
  
  drawSprites();
}
