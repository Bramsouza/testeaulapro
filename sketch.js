var notas = [9.5,7.8,10,10]
console.log(notas);
console.log(notas[0]);
console.log(notas[3]);

function mediaNotas(){
  var soma = notas[0] + notas[1] + notas[2] + notas[3]
  var media = soma/notas.length;
  console.log("Essa aqui é a média: " + media)
}

var peso = [35,38,40,45];
function mediaPesos(){
  var somaPeso = peso[0] +peso[1] + peso[2] + peso[3]
  var mediaPeso = somaPeso/peso.length;
  console.log(peso);
  console.log(mediaPeso);
}

function setup() {
  createCanvas(400, 400);
  mediaNotas();
  mediaPesos();
}

function draw() {
  background(220);
}

