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
