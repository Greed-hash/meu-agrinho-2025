var fundo;
var fundo2;
var musicaDeFundo;
var botaoVermelho;

function preload() {
  fundo = loadImage('WinXp.jpg');
  fundo2 = loadImage('homoge.jpg');
  musicaDeFundo = loadSound("HillClimbRacing.mp3");
}

function setup() {
  createCanvas(800, 600);
  
  // Cria o botão
  botaoVermelho = createButton('Mudar para cidade');
  botaoVermelho.position(20, 20);
  botaoVermelho.mousePressed(mudarFundoVermelho);
}

function draw() {
  musicaDeFundo.loop()
  // Se fundo for uma imagem, usa como background
  if (typeof fundo === 'object' && fundo instanceof p5.Image) {
    background(fundo);
  } else {
    // Caso contrário, assume que é uma cor
    background(fundo);
  }
}

function mudarFundoVermelho() {
  // Troca o fundo para vermelho (remove a imagem)
  fundo = fundo2
}