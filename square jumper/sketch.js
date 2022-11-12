/*
REINVENÇÃO DO JOGO GEOMETRY DASH UTILIZANDO A LINGUAGEM JAVASCRIPT - JUMPER SQUARE
BY: SILVIA MIGUÊZ
DATA: 18/03/2022
*/

//declarando variáveis
var personagem, plataforma, chao, chegada;
var barreira1, barreira2, barreira3, barreira4;
var nuvem1, nuvem2, nuvem3, nuvem4, nuvemImage;
//var song;

function preload(){
  nuvemImage = loadImage("nuvem.png");
  //solImage = loadImage("sol.png");
}

function setup() {

  //Definição do mundo do jogo
  createCanvas(500, 200);


  //criar sprites

  //criando nuvens obs: precisam ser renderizadas antes para não sobreporem o personagem
  nuvem1 = createSprite(60,35,20,20);
  nuvem1.addImage(nuvemImage);
  nuvem1.scale = 0.12;
  nuvem2 = createSprite(150,15,20,20);
  nuvem2.addImage(nuvemImage);
  nuvem2.scale = 0.1;
  nuvem3 = createSprite(220,30,20,20);
  nuvem3.addImage(nuvemImage);
  nuvem3.scale = 0.08;
  nuvem4 = createSprite(290,15,20,20);
  nuvem4.addImage(nuvemImage);
  nuvem4.scale = 0.1;
  nuvem5 = createSprite(365,30,20,20);
  nuvem5.addImage(nuvemImage);
  nuvem5.scale = 0.07;
  nuvem6 = createSprite(440,15,20,20);
  nuvem6.addImage(nuvemImage);
  nuvem6.scale = 0.1;
  
/*
  nuvem = createSprite(60,35,20,20);
  nuvem.addImage(nuvemImage);
  NuvemGrupo = createGroup();
  NuvemGrupo.add(nuvem);
  nuvem.y = Math.round(random(10,20));
  nuvem.x = Math.round(random(70,100));
  nuvem.scale = 0.12;
  */

  //criando personagem
  personagem = createSprite(30,160,15,15);
  personagem.shapeColor = "black";

  //criando plataforma - solzinho
  plataforma = createSprite(30,170,40,20);
  plataforma.shapeColor = "yellow";
  //plataforma.addImage(solImage);
  //solImage.scale = 1.0;

  //criando barreiras
  barreira1 = createSprite(120,100,50,20);
  barreira1.shapeColor="brown";
  barreira2 = createSprite(180,70,20,20);
  barreira2.shapeColor="brown";
  barreira3 = createSprite(215,130,40,20);
  barreira3.shapeColor="brown";
  barreira4 = createSprite(275,120,40,20);
  barreira4.shapeColor="brown";
  barreira5 = createSprite(325,85,20,20);
  barreira5.shapeColor="brown";
  barreira6 = createSprite(360,70,20,20);
  barreira6.shapeColor="brown";
  barreira7 = createSprite(400,55,20,40);
  barreira7.shapeColor="brown";
  barreira8 = createSprite(400,130,40,20);
  barreira8.shapeColor="brown";
  barreira9 = createSprite(460,110,40,20);
  barreira9.shapeColor="brown";

  //criando o chao/solo
  chao = createSprite(200,190,600,30);
  chao.shapeColor = "darkgreen";

  ceu = createSprite(200,1,600,1);
  ceu.shapeColor = "blue";
  ceu.collide(personagem);

  //dar sensacao de movimento ao chao
  //chao.x = chao.width /2;
  //chao.velocityX = -2;

}

//funcao para verificar se há colisão entre o personagem e algum objeto
function colisao(colidir){
  var colidir;
  if(personagem.isTouching(colidir)){
    personagem.collide(colidir);
  }

  if(personagem.isTouching(colidir)){
    personagem.collide(ceu);
    personagem.velocityY = 100;
  }
}

function vitoria(){
  //Verificar se há vitória
  if(personagem.isTouching(chegada)){
    colisao(chegada);
    chegada.destroy();
    //personagem.destroy();
    swal("Vitoria!!!");
    personagem.x = 30;
    personagem.y = 160;
  }
}
    //VERIFICAR SE PERSONAGEM ESTA TOCANDO CHAO E SE SUA POS X É MAIOR OU IGUAL A 120
    //COLOCAR ALERT DERROTA
    //RETORNAR AO INICIO
    function derrota(){
      if((personagem.x>=31) && (personagem.y>=167.5)){
        colisao(chao);
        swal("Derrota!!!");
        personagem.x = 30;
        personagem.y = 160;
      } 
    }


function draw() {

    //cor de fundo
    background("lightblue");

    //criando chegada/fim
    chegada = createSprite(497,150,5,350);
    chegada.shapeColor = "purple";

    //Verificar se há vitória ou derrota
    vitoria();

    derrota();

    //GAMING THE SYSTEM:
    //Se o jogador chegar na final apenas pressionando a seta para cima e para o lado, sem tocar os obstáculos...

    //deslocamento para direita quando a seta para direita for pressionada
    if (keyIsDown(RIGHT_ARROW)){
      personagem.x += 2;
    }

    //deslocamento para esquerda quando a seta para esquerda for pressionada
    if (keyIsDown(LEFT_ARROW)){
      personagem.x -= 2;
    }

    if (keyIsDown(UP_ARROW)){
      personagem.y -= 2;
    }

    // se a seta para cima for pressionada e a posicao y do personagem for pelo menos 100
    if ((keyIsDown(UP_ARROW)) && personagem.y >= 69) {
      personagem.velocityY = -10; //reduzir a velocidade y em -10
    }

    //verificar colisoes
    colisao(barreira1);
    colisao(barreira2);
    colisao(barreira3);
    colisao(barreira4);
    colisao(barreira5);
    colisao(barreira6);
    colisao(barreira7);
    colisao(barreira8);
    colisao(barreira9);
    colisao(ceu);

    //gravidade
    personagem.velocityY += 1.5;
    personagem.collide(plataforma);
    personagem.collide(chao);

  drawSprites();
}