//FUNÇÕES CONSTRUTORAS - são responsáveis por construir novos objetos sempre que chamamos a mesma
function Carro(marca, preco){
    this.marca = marca,
    this.preco = preco;
}
const honda = new Carro(); //instanciando um novo carro
honda.marca = 'Honda';
honda.preco = 4000;
honda.ano = 2018; //posso criar uma nova propriedade
honda.andar = function(){ //posso criar um novo método
    console.log('andou')
}
//OU
const fiat = new Carro('Fiat', 3000);
//this faz referencia ao próprio objeto construído com a constructor function
//EXEMPLO REAL - quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar o novo seletor e seus métodos
//função normal:
// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor)
//     },
//     ativo(){
//         this.element().classList.add('ativo');
//     },
// }
function Dom (seletor) {
    this.seletor = seletor;
    this.element = function(){
        return document.querySelector(seletor)
    },
    this.ativo = function(){
        this.element().classList.add('ativo');
    }
}

const li = new Dom('li');
const li = new Dom('ul');

//PROTOTYPE - é um objeto adicionado a uma função quando a mesma é criada
//com ela, é possivel adicionar coisas em uma função
Pessoa.prototype.andar = function(){
    return 'Pessoa andou'
}
console.log(Pessoa.prototype);
//Coo transformar lista em array
const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);

//STRING
//length
const comida = 'Pizza';
comida.length//5
//charAt
comida.charAt(1);//i
//concat - concatenar string, pode ser usado o + tb
const frase = ' Hut'
const fraseCompleta = comida.concat(frase)//Pizza Hut
//includes - retorna true ou false
frase.includes(comida);//false
//endsWith
comida.endsWith('za')//true
//startsWith
comida.startsWith('Ba')//true
//slice - corta string de acordo com os valores de start e end
comida.slice(0,2);//Pi
comida.slice(0,-2)//za pega os 2 ultimos caracteres
//padStart - aumenta o tamanho da string para o valor de n
comida.padStart(2, '.')//..Pizza
comida.padEnd(2,'.')//Pizza..
//repeat - repete a string n vezes
comida.repeat(2)//PizzaPizza
//replace - troca parte da string por outra
let listaItens = 'Camisas Bonés';
listaItens = listaItens.replace(' ', ',')//onde há espaço vai ser colocada uma vírgula, porem so pega o primeiro espaço
listaItens = listaItens.replace(/[ ]+/g, ',')//assim pega todos os que tem espaço
//split - divide a string de acordo com o padrão passado e retorna uma array
const hymlText = '<div>The best</div><div>Programmer</div>';
const htmlArray = htmlText.split('div');//quebra cada vez que div aparecer
//join - junta a array e poe o argumento ddado no final de cada item
const frutasArray = ['Banana', 'Melancia']
frutasArray.join('a');//BananaaMelanciaa
//toLowerCase - retorna a string em letras minúsculas
//toUpperCase - retorna a string em letras maiúsculas
//trim, trimStart, trimEnd - remove espaço em branco do início ou final de uma string
const valor = ' 23.00 ';
valor.trim();//remove no inicio e fim
//trimStart - começo
//trimEnd - fim

//NUMBER - é a construtora de números, todo número possui as propriedades e métodos do prototype de Number
//isNaN - is not a Number 
Number.isNaN(4 + 5)//false
//isInteger
Number.isInteger(20)//true
Number.isInteger(20.1)//false
//parseFloat - retorna float atraves de uma string
Number.parseFloat('99.50');//99.50
//parseInt - retorna int através de uma string, também recebe um 2 parametro que é o radix, 10 é para decimal
parseInt('99.50', 10);//99
parseInt(5.29494394, 10)//5
//float possui decimal, integer não
//toFixed - arredonda o número com base no total de casas decimais do argumento
const preco = 2.99
preco.toFixed();//3
const carro = 1000.455;
carro.toFixed(2)//1000.46
//toString - transforma numero em string, usando o 10 para o sistema decimal
const preco = 2.99;
preco.toString(10);//'2.99'
//toLocaleString - formata o número de acordo com a língua e opções passadas
const preco = 59.49
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'})//$59.49

//MATH
Math.abs(-5.5)//5.5 retorta o valor absoluto, transformando positivo em negativo
Math.ceil(4.893483)//5 arredonda para cima, transformando em int
Math.floor(4.89328)//4 arredonda para baixo, transformando em int
Math.round(4.989)//5 arredonda para o numero integral mais proximo
Math.max(5,7,9,1,4,0)//9 retorna o maior numero de uma lista de argumentos
Math.min(5,9,2,4)//2 retorna o menor numero
Math.random();//0.XXX
Math.floor(Math.random() * 100);//entre 0 e 100