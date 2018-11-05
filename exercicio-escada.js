// FAÇA UM PROGRAMA QUE RECEBA A QUANTIDADE DE DEGRAUS QUE UMA ESCADA TEM E DESENHE ESSA ESCADA NO CONSOLE.

// Exemplo:

// #
// ##
// ###
// ####
// #####

//Bônus:

//Pergunte para o usuario qual o caracter que ele gostaria de usar para fazer a escada. 

let input = (prompt('digite a quantidade de graus'));
let escada = '#'
let i = 0;

while (i <= input){
    console.log(escada);
    escada += '#';
      i++;
}