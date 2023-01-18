const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    retornarIMC('Valor Inválido', false);
    return;
  }

  if (!altura) {
    retornarIMC('Valor Inválido', false);
    return;
  }

  const imc = calcularIMC(peso, altura);
  const resultadoIMC = faixaIMC(imc);
  const msg = `Seu IMC é ${imc}, você tem ${resultadoIMC}.`;
  retornarIMC(msg, true);
});

function calcularIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criarP() {
  const p = document.createElement('p');
  return p;
}

function retornarIMC(msg, validar) {
  const valorIMC = document.querySelector('#valorIMC');
  valorIMC.innerHTML = '';
  const p = criarP();

  if (validar) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('resultado-incorreto');
  }
  p.innerHTML = msg;
  valorIMC.appendChild(p);
}

function faixaIMC(imc) {
  const faixa = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];

  if (imc >= 39.9) {
    return faixa[5];
  }

  if (imc >= 34.9) {
    return faixa[4];
  }

  if (imc >= 29.9) {
    return faixa[3];
  }

  if (imc >= 24.9) {
    return faixa[2];
  }

  if (imc >= 18.5) {
    return faixa[1];
  }

  if (imc < 18.5) {
    return faixa[0];
  }
}
