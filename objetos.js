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

//ARRAYS - armazenam uma coleção de elementos, podendo ser strings, boolean, number, functions, arrays, objects... 
Array.isArray(li)//retorna se é array ou não

//Métodos modificadores de arrays:
//sort - organiza strings e numeros
const intrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();//['Baixo', 'Guitarra', 'Violão']
//unshift - adiciona elementos ao início da array e retorna o length da mesma
instrumentos.unshift('Piano')//3
//push - aidiona elementos ao final da array e retorna o length das mesmas
instrumentos.push('Acordeon');
//shift - remove o primeiro elemento da array e retorna o mesmo
const primeiroInstrumento = instrumento.shift()//Guitarra
//pop - remove o ultimo elemento da array e retorna o mesmo
const ultimoInstrumento = instrumento.pop()//Acordeon
//reverse - inverte os itens da array
//splice(index, remover, item1, item2...) - adiciona valores na array a partir do index, remove a quantidade
//de itens que for passada no segundo parametro e retorna esses itens
const carros = ['Ford', 'Fiat', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang')
carros;//['Ford', 'Kia', 'Mustang', 'Fiat', 'Honda']
//copyWithin(alvo, inicio, final) - a partir do alvo ele irá copiar a array começando do incio até o final
//e vai preencher a mesma com essa cópia. Caso omita valores de início e final, ele irá utilizar como 
//início 0 e final o valor total da array
['item1', 'item2', 'item3'].copyWithin(2,0,3)//['item1', 'item2', 'item1', 'item2']

//Métodos de acesso - não modificam a array original, apenas retornam a array modificada
//concat
const carro1 = ['Honda', 'Kia'];
const carro2 = ['Ferrari', 'BMW'];
const carros = carro1.concat(carro2);
//includes - verifica se a array possui o valor e retorna true ou false
const linguagens = ['html', 'css', 'js'];
linguagens.includes('css')//true
//indexOf - verifica se a array possui o valor e retorna o index do primeiro valor da array
linguagens.indexOf('js')//2
//lastIndexOf - retorna o index do ultimo
linguagens.lastIndexOf('js')//2
//join - junta todos os valores numa string unica
linguagens.join()//htmlcssjs
linguagens.join(' ')//html css js
//slice(inicio, final) - retorna os itens da array começando pelo incio e indo ate o valor final
linguagens.slice(2)//['js]
linguagens.slice(0,1)//['html', 'css']

//Array e Iteração
//map(callback(itemAtual, index, array)) - funciona da mesma forma que o forEach(), retornando uma nova
//array com valores atualizados de acordo com o return de cada iteração
const letras = ['a', 'b', 'c'];
const newLetras = letras.map((item) => {
    return 'Letra ' + item;
}) 
letras;//['a', 'b', 'c']
newLetras;//['Letra a', 'Letra b', 'Letra c']
//reduce(callback(acumulador, valorAtual, index, array), valorInicial) - executa a função de callback para 
//cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas 
//é na verdade apenas o retorno da iteração anterior
const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
    return acumulador + atual;
});
total1; //65
const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2;//165
//Maior valor com reduce
const numeros = [10, 25, 60, 5, 35];
const maiorValor = numeros.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});
maiorValor;//60
//reduceRight - itera da direita para a esquerda, enquanto o reduce itera da esquerda para a direita
//some() - se pelo menos um return da iteração for true, ele retorna true
const frutas = ['Pera', 'Uva', 'Maça'];
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
});//true
//every() - se todos os returns das iterações forem true, o método irá retornar true. se pelo menos um for false, ele retornara false
const frutas = ['Pera', 'Uva', 'Maça', ''];
const arraysCheias = frutas.every((fruta) =>{
    return fruta;//false, pois uma fruta esta vazia, que e um valor false
});
//find() - retorna o valor atual da primeira iteração que retorna um valor true
const numeros = [6,9,3,5,2];
const buscaMaior7 = numeros.find(x => x > 7);//9
//findIndex() - retorna o index deste valor na array
const busca5 = numeros.findIndex((numero) => {
    return numero === 5;
})//3
//filter() - retorna uma array com a lista de valores que durante a sua iteração retornaram true
