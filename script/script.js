// Vinheria Agnello - Checkpoint 02


var anoAtual = new Date().getFullYear();

// Dados dos vinhos (maximo de 5)
var nome1 = "", safra1 = 0, quant1 = 0, classe1 = "";
var nome2 = "", safra2 = 0, quant2 = 0, classe2 = "";
var nome3 = "", safra3 = 0, quant3 = 0, classe3 = "";
var nome4 = "", safra4 = 0, quant4 = 0, classe4 = "";
var nome5 = "", safra5 = 0, quant5 = 0, classe5 = "";

// Contadores do resumo final
var total = 0;
var baixos = 0;
var safraAntiga = 0;
var nomeAntigo = "";

// FUNCOES ----------

// Valida o nome: nao pode ser vazio
function pedirNome(numero) {
  var nome = prompt("Vinho " + numero + " - Nome do vinho:");
  while (nome === null || nome.trim() === "") {
    alert("Nome invalido! Digite um nome.");
    nome = prompt("Vinho " + numero + " - Nome do vinho:");
  }
  return nome.trim();
}

// Valida numeros: precisa ser um numero entre min e max
function pedirNumero(mensagem, min, max) {
  var texto = prompt(mensagem);
  while (texto === null || texto.trim() === "" || isNaN(texto) || texto < min || texto > max) {
    alert("Valor invalido! Digite um numero entre " + min + " e " + max + ".");
    texto = prompt(mensagem);
  }
  return Number(texto);
}

// Estoque baixo = menos de 5
function estoqueBaixo(quantidade) {
  if (quantidade < 5) {
    return true;
  }
  return false;
}

// Classifica o vinho pela idade
function classificarVinho(safra) {
  var idade = anoAtual - safra;
  if (idade <= 5) {
    return "Jovem";
  } else if (idade <= 15) {
    return "Amadurecido";
  } else {
    return "Antigo";
  }
}

// Mostra no console e avisa com alert
function mostrarVinho(numero, nome, safra, quantidade, classe) {
  var texto = "Vinho " + numero + ": " + nome + " | Safra " + safra + " | Estoque " + quantidade + " | " + classe;
  if (estoqueBaixo(quantidade)) {
    texto = texto + " | ESTOQUE BAIXO!";
  }
  console.log(texto);
  alert(texto);
}

// Guarda nas variaveis certas conforme o numero do vinho
function guardarVinho(numero, nome, safra, quantidade, classe) {
  if (numero === 1) {
    nome1 = nome; safra1 = safra; quant1 = quantidade; classe1 = classe;
  } else if (numero === 2) {
    nome2 = nome; safra2 = safra; quant2 = quantidade; classe2 = classe;
  } else if (numero === 3) {
    nome3 = nome; safra3 = safra; quant3 = quantidade; classe3 = classe;
  } else if (numero === 4) {
    nome4 = nome; safra4 = safra; quant4 = quantidade; classe4 = classe;
  } else if (numero === 5) {
    nome5 = nome; safra5 = safra; quant5 = quantidade; classe5 = classe;
  }
}

// Monta o cartao de um vinho para mostrar na pagina
function montarCartao(numero, nome, safra, quantidade, classe) {
  var selo = '<span class="selo ok">Estoque ok</span>';
  if (estoqueBaixo(quantidade)) {
    selo = '<span class="selo baixo">Estoque baixo</span>';
  }
  return '<article class="vinho">' +
    '<h3>' + numero + '. ' + nome + '</h3>' +
    '<dl><dt>Safra</dt><dd>' + safra + '</dd>' +
    '<dt>Estoque</dt><dd>' + quantidade + ' garrafa(s)</dd>' +
    '<dt>Classificacao</dt><dd>' + classe + '</dd></dl>' +
    selo + '</article>';
}

// Mostra o resumo e os vinhos na pagina
function mostrarNaTela() {
  var area = document.getElementById("resultado");

  if (total === 0) {
    area.innerHTML = '<p class="vazio">Nenhum vinho cadastrado.</p>';
    return;
  }

  var html = '<div class="resumo">' +
    '<div><span class="numero">' + total + '</span><span class="rotulo">vinho(s) cadastrado(s)</span></div>' +
    '<div><span class="numero">' + baixos + '</span><span class="rotulo">com estoque baixo</span></div>' +
    '<div><span class="numero">' + safraAntiga + '</span><span class="rotulo">safra mais antiga: ' + nomeAntigo + '</span></div>' +
    '</div><h2>Vinhos cadastrados</h2><div class="lista-vinhos">';

  if (total >= 1) { html += montarCartao(1, nome1, safra1, quant1, classe1); }
  if (total >= 2) { html += montarCartao(2, nome2, safra2, quant2, classe2); }
  if (total >= 3) { html += montarCartao(3, nome3, safra3, quant3, classe3); }
  if (total >= 4) { html += montarCartao(4, nome4, safra4, quant4, classe4); }
  if (total >= 5) { html += montarCartao(5, nome5, safra5, quant5, classe5); }

  area.innerHTML = html + '</div>';
}

// ---------- PROGRAMA PRINCIPAL ----------

function iniciarCadastro() {
  // zera tudo para poder cadastrar de novo
  total = 0;
  baixos = 0;
  safraAntiga = 0;
  nomeAntigo = "";

  var continuar = "s";

  // repete enquanto o usuario quiser e nao passar de 5 vinhos
  while (continuar === "s" && total < 5) {
    var numero = total + 1;
    var nome = pedirNome(numero);
    var safra = pedirNumero("Vinho " + numero + " - Safra (1900 a " + anoAtual + "):", 1900, anoAtual);
    var quantidade = pedirNumero("Vinho " + numero + " - Quantidade em estoque:", 0, 10000);

    total++;
    var classe = classificarVinho(safra);
    guardarVinho(total, nome, safra, quantidade, classe);

    if (estoqueBaixo(quantidade)) {
      baixos++;
    }

    // compara a safra para achar a mais antiga
    if (total === 1 || safra < safraAntiga) {
      safraAntiga = safra;
      nomeAntigo = nome;
    }

    mostrarVinho(total, nome, safra, quantidade, classe);

    if (total < 5) {
      continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
      while (continuar !== "s" && continuar !== "n") {
        continuar = prompt("Digite apenas s ou n. Deseja cadastrar outro vinho?");
      }
    } else {
      alert("Limite de 5 vinhos atingido.");
    }
  }

  // resumo final
  var resumo = "Cadastros feitos: " + total + "\nVinhos com estoque baixo: " + baixos + "\nSafra mais antiga: " + nomeAntigo + " (" + safraAntiga + ")";
  console.log(resumo);
  alert(resumo);
  mostrarNaTela();
}

// botao da pagina
document.getElementById("btnIniciar").onclick = iniciarCadastro;