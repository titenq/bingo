const numeroSorteado = document.getElementById('numeroSorteado');
const proximoNumero = document.getElementById('proximoNumero');
const numerosJaSorteados = document.getElementById('numerosJaSorteados');
const b0 = document.getElementById('b0');
const i0 = document.getElementById('i0');
const n0 = document.getElementById('n0');
const g0 = document.getElementById('g0');
const o0 = document.getElementById('o0');

let cartelaB = Array.from(new Array(15), (val, index) => index + 1);
let cartelaI = Array.from(new Array(15), (val, index) => index + 16);
let cartelaN = Array.from(new Array(15), (val, index) => index + 31);
let cartelaG = Array.from(new Array(15), (val, index) => index + 46);
let cartelaO = Array.from(new Array(15), (val, index) => index + 61);

cartelaB = cartelaB.map(numero => {
  return String(numero).padStart(2, '0');
});
cartelaI = cartelaI.map(numero => {
  return String(numero).padStart(2, '0');
});
cartelaN = cartelaN.map(numero => {
  return String(numero).padStart(2, '0');
});
cartelaG = cartelaG.map(numero => {
  return String(numero).padStart(2, '0');
});
cartelaO = cartelaO.map(numero => {
  return String(numero).padStart(2, '0');
});

cartelaB = embaralhar(cartelaB);
cartelaI = embaralhar(cartelaI);
cartelaN = embaralhar(cartelaN);
cartelaG = embaralhar(cartelaG);
cartelaO = embaralhar(cartelaO);

cartelaB.length = 5;
cartelaI.length = 5;
cartelaN.length = 4;
cartelaG.length = 5;
cartelaO.length = 5;

cartelaB.sort();
cartelaI.sort();
cartelaN.sort();
cartelaG.sort();
cartelaO.sort();

b0.innerText = cartelaB[0];
b1.innerText = cartelaB[1];
b2.innerText = cartelaB[2];
b3.innerText = cartelaB[3];
b4.innerText = cartelaB[4];

i0.innerText = cartelaI[0];
i1.innerText = cartelaI[1];
i2.innerText = cartelaI[2];
i3.innerText = cartelaI[3];
i4.innerText = cartelaI[4];

n0.innerText = cartelaN[0];
n1.innerText = cartelaN[1];
n2.innerText = 'BINGO';
n3.innerText = cartelaN[2];
n4.innerText = cartelaN[3];

g0.innerText = cartelaG[0];
g1.innerText = cartelaG[1];
g2.innerText = cartelaG[2];
g3.innerText = cartelaG[3];
g4.innerText = cartelaG[4];

o0.innerText = cartelaO[0];
o1.innerText = cartelaO[1];
o2.innerText = cartelaO[2];
o3.innerText = cartelaO[3];
o4.innerText = cartelaO[4];

let numeros = Array.from(new Array(75), (val, index) => index + 1);

function embaralhar(array) {
  var i,
      j,
      temp;
  for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;    
};

let numerosEmbaralhados = embaralhar(numeros);

let numerosSorteados = numerosEmbaralhados.map(numero => {
  return String(numero).padStart(2, '0');
});

let posicao = 0;
let arrayNumerosJaSorteados = [];

proximoNumero.onclick = function() {
  if (posicao < numerosSorteados.length) {
    numeroSorteado.innerText = numerosSorteados[posicao];
    arrayNumerosJaSorteados.push(numerosSorteados[posicao]);
    numerosJaSorteados.innerHTML +=`
      <div class="ball-ja-sorteado">
        <span class="numero-sorteado numero-ja-sorteado">
          ${arrayNumerosJaSorteados[posicao]}
        </span>
      </div>`;
    
    for (let i = 0; i < 5; i++) {
      if (arrayNumerosJaSorteados[posicao] === cartelaB[i]) {
        if (i === 0) {
          b0.style.backgroundColor = '#0f0';
        } else if (i === 1) {
          b1.style.backgroundColor = '#0f0';
        } else if (i === 2) {
          b2.style.backgroundColor = '#0f0';
        } else if (i === 3) {
          b3.style.backgroundColor = '#0f0';
        } else if (i === 4) {
          b4.style.backgroundColor = '#0f0';
        }
      } else if (arrayNumerosJaSorteados[posicao] === cartelaI[i]) {
        if (i === 0) {
          i0.style.backgroundColor = '#0f0';
        } else if (i === 1) {
          i1.style.backgroundColor = '#0f0';
        } else if (i === 2) {
          i2.style.backgroundColor = '#0f0';
        } else if (i === 3) {
          i3.style.backgroundColor = '#0f0';
        } else if (i === 4) {
          i4.style.backgroundColor = '#0f0';
        }
      } else if (arrayNumerosJaSorteados[posicao] === cartelaN[i]) {
        if (i === 0) {
          n0.style.backgroundColor = '#0f0';
        } else if (i === 1) {
          n1.style.backgroundColor = '#0f0';
        } else if (i === 2) {
          n3.style.backgroundColor = '#0f0';
        } else if (i === 3) {
          n4.style.backgroundColor = '#0f0';
        }
      } else if (arrayNumerosJaSorteados[posicao] === cartelaG[i]) {
        if (i === 0) {
          g0.style.backgroundColor = '#0f0';
        } else if (i === 1) {
          g1.style.backgroundColor = '#0f0';
        } else if (i === 2) {
          g2.style.backgroundColor = '#0f0';
        } else if (i === 3) {
          g3.style.backgroundColor = '#0f0';
        } else if (i === 4) {
          g4.style.backgroundColor = '#0f0';
        }
      } else if (arrayNumerosJaSorteados[posicao] === cartelaO[i]) {
        if (i === 0) {
          o0.style.backgroundColor = '#0f0';
        } else if (i === 1) {
          o1.style.backgroundColor = '#0f0';
        } else if (i === 2) {
          o2.style.backgroundColor = '#0f0';
        } else if (i === 3) {
          o3.style.backgroundColor = '#0f0';
        } else if (i === 4) {
          o4.style.backgroundColor = '#0f0';
        }
      }
    }
  
    posicao++;
  }
}
