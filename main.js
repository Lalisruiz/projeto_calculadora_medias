const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/check-success.svg" alt="Aprovado"/>';
const imgReprovado = '<img src="./images/close-error.svg" alt="Reprovado"/>';
const imgRecuperacao = '<img src="./images/warning-recuperacao.svg" alt="Recuperação"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let notaMinima = parseFloat(prompt("Digite a Nota Mínima:"));
while (isNaN(notaMinima)) {
  notaMinima = parseFloat(prompt("Por favor, digite uma nota mínima válida (número):"));
}

let linhas = ''; // Mantido fora da função para acumular as linhas

form.addEventListener('submit', function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();  
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  const nomeAtividade = inputNomeAtividade.value.trim();
  const notaAtividade = parseFloat(inputNotaAtividade.value);

  if (nomeAtividade === '' || isNaN(notaAtividade)) {
    alert("Preencha corretamente o nome da atividade e a nota.");
    return;
  }

  if (atividades.includes(nomeAtividade)) {
    alert(`A atividade "${nomeAtividade}" já foi inserida`);
    return;
  }

  atividades.push(nomeAtividade);
  notas.push(notaAtividade);

  let linha = '<tr>';
  linha += `<td>${nomeAtividade}</td>`;
  linha += `<td>${notaAtividade}</td>`;
  linha += `<td>${
    notaAtividade === notaMinima ? imgRecuperacao :
    notaAtividade >= notaMinima ? imgAprovado : imgReprovado
  }</td>`;
  linha += '</tr>';

  linhas += linha;

  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';   
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
  document.getElementById('media-final-resultado').innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  console.log("Soma das notas:", somaDasNotas);
  return somaDasNotas / notas.length;
}