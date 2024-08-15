let palavra;
let musicas;
let imagem;

function setup() {
  createCanvas(500, 500);
  palavra = batata();
  musicas.loop();
}

function preolad() {
  imagem = loadImage("foto.jfif");
  musicas = loadSound("musica.mp3");
}

function draw() {
  chocolate();
  batata();

  let maximo = width;
  let minimo = 0;

  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, aparecer);
  text(inicio, 250, 250);
}

function chocolate() {
  background("violet");
  image(imagem, 500, 500);
  fill("lightblue");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function batata() {
  let palavras = ["jesus", "porsche", "pastel", "OBX", "sorvete"];
  return random(palavras);
}
