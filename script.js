var contadorSim = 0;
var contadorNão = 0;
var p = document.querySelector("span");
var pNao = document.querySelector(".nao");

var btn = document
  .getElementById("btn")
  .addEventListener("click", () => {
    contadorSim++;

    total();
    alert("Obrigado pelo Voto.");
  });

var btnN = document
  .querySelector(".btnNao")
  .addEventListener("click", () => {
    contadorNão++;

    total();

    alert("Obrigado pelo voto.");
  });

function total() {
  var vtotal = contadorNão + contadorSim;
  document.querySelector("#total").innerHTML = vtotal;

  var votos1 = (contadorSim / vtotal) * 100;
  var votos2 = (contadorNão / vtotal) * 100;
  p.innerHTML = parseFloat(votos1).toFixed(2) + "%";
  pNao.innerHTML = parseFloat(votos2).toFixed(2) + "%";
}

var q1 = "Você acredita em Deus?";
var q2 = "Você quer ser rico?";
var q3 = "O bitcoin vai subir em 2024?";

var questoes = [q1, q2, q3];


var indice = Math.floor(Math.random() * questoes.length);

document.querySelector("h2").innerHTML = questoes[indice];