// inteiros e deimais 
const radius = 10;
const pi = 3.14;

// operadores aritméticos
const reminder = 5 % 2; // % resto de operação
const area = pi *radius ** 2;

// ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2;

// 1° Parenteses
// 2° Expoentes ou raízes
// 3° multiplicação e divisão
// 4° adição e subtração

// operadres de incremento e decremento

let postLikes = 10;

// postLikes = postLikes + 1; incremento
postLikes ++;
// console.log(postLikes);

// postLikes = postLikes - 1; decremento
postLikes --;
// console.log(postLikes);


// operadores addition, subtraction, multiplication e division assignment
console.log(postLikes);
console.log('-----------');
postLikes -= 5;
console.log(postLikes);
console.log('-----------');
postLikes += 5;
console.log(postLikes);
console.log('-----------');
postLikes *= 5;
console.log(postLikes);
console.log('-----------');
postLikes /= 5;
console.log(postLikes);


//  NaN - not a number
// Operações que não fazem sentido 
console.log(7 / 'oi');

// concatenação de string com número
// O resulta da concatenação de uma string e de um número sempre será uma string
const likesMenssage = 'O post tem ' + postLikes + ' likes.';
// console.log(likesMenssage);