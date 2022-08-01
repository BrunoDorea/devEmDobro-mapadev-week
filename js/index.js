/*
Objetivo 1: Quando clicar na seta de avançar, tempos que mostrar o próximo cartão da lista
  - passo 1: dar um jeito de pegar o elemento HTML da seta avançar
  - passo 2: dar um jeito de identificar o clique do usuário na seta avançar
  - passo 3: fazer aparecer o proximo cartão da lista
  - passo 4: buscar o cartão que está selecionado e esconder

Objetivo 2: Quando clicar na seta de voltar, tempos que mostrar o cartão anterior
  - passo 1: dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2: dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3: fazer aparecer o cartão anterior da lista
  - passo 4: buscar o cartão que está selecionado e esconder
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

// Função para esconder o cartão selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
  cartoes[cartaoAtual].classList.add('selecionado');
}

// Função que mostra o próximo cartão da lista
btnAvancar.addEventListener('click', function(){
  if(cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

// Função que mostra o cartão anterior da lista
btnVoltar.addEventListener('click', function(){
  if(cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});