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
const listaArray = Array.prototype.slice.call(lista)