# Vinheria Agnello – Checkpoint 02

Sistema de avaliação de estoque e tendência de vinhos, feito em JavaScript puro com `prompt()` e `alert()`, e com os resultados exibidos também na página.

## O que foi implementado

 Cadastro de **vários vinhos em sequência** (até 5), perguntando ao final de cada um se deseja cadastrar outro.
 Funções reutilizáveis:
  
   validação de texto e de números inteiros (`validarTexto`, `validarInteiro`, `pedirNome`, `pedirInteiro`, `perguntarSimNao`)
  `estoqueBaixo()`: estoque menor que 5 garrafas
  `classificarVinho()`: jovem (até 5 anos), amadurecido (6 a 15 anos) ou antigo (mais de 15 anos)
   `mostrarVinho()`: mostra no console e avisa por `alert()`
 
 Escopo: variáveis dentro das funções são locais; só os dados dos vinhos e os contadores do resumo são globais.
 
 Laços: `while` para o cadastro em sequência, para as validações e para montar a lista na tela.
 
 Sem arrays e sem objetos**: cada vinho usa variáveis numeradas (`nome1`, `safra1`, `quant1`, `classe1`...).
 
 Resumo final  (alert, console e página): total de cadastros, vinhos com estoque baixo e vinho com a safra mais antiga, comparada manualmente a cada iteração.
Tela: cartões com os dados de cada vinho, selos de estoque baixo e de safra mais antiga.

## Integrantes

GUILHERME ENRICO CARREIRO LEITE 
RM575227


## GitHub Pages

 https://enrico109.github.io/vinheria-agnello-checkpoint02/

## Como usar

1. Abra a página e clique em **Iniciar cadastro**.
2. Responda às janelas: nome, safra e quantidade em estoque.
3. Responda `s` para cadastrar outro vinho ou `n` para encerrar.
4. Veja o resumo e os cartões na página.