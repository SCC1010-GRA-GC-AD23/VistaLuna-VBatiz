let fondo
let textura

function preload() {
  // put preload code here
  fondo = loadImage("./images/alunizaje.png")
  textura = loadImage("./images/tierra.jpg")
}

function setup() {
  // put setup code here
  createCanvas(1200,720, WEBGL)
  imageMode(CENTER)
}

function draw() {
  // put drawing code here
  background(255)
  image(fondo, 0, 0, width, height)
  translate(300,-300, 0 )
  rotateX(frameCount * 0.001)
  rotateY(frameCount * 0.001)
  rotateZ(frameCount * 0.001)
  texture(textura)
  sphere(80,24)
  //box(80,40)
}
