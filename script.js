//JS é uma linguagem fracamente tipada e dinâmica
/*Variáveis:
    var -> global e poderá funcionar fora do escopo de um bloco
    const e let são locais e só funcionam no escopo onde foram criad
*/
let y =1;

{
    y = 0
    console.log('valor de y eh', y)
}

console.log('agora o valor de y eh ', y)
//saida: valor de y eh = 0
//       agora o valor de y eh = 0
//isso acontece pq o y ta sobrescrevendo o let y, já que no escopo o y não esta usando var. reservada
//isso eh chamado de hoisting

//Nome de variáveis
//JS é case-sensitive (A é diferente de a)
/* Posso:
    iniciar com caracteres especiais
    iniciar com letras
    colocar acentos
    letras maiusculas e minisculas

Não posso:
    iniciar com numeros
    espaços vazios no nome
*/

//Variáveis e tipos de dados
const name = "Bianca";
console.log(typeof name); //tipo de dado da variavel
let age = 19;
let isHuman = true;

//Concatenação
console.log('A ' + name + 'tem ' + age + 'anos') //ou:
console.log(`A ${name} tem ${age} anos`)

//Funções
function createPhrases(){
    console.log('Alguma coisa aqui')
}
createPhrases() //chama a função

//Function expression
const sum = function(number1, number2){ //parametros
    total = number1 + number2
    return total

}
//sum(4,5)//argumentos
let number1 = 34
let number2 = 25
console.log(`o numero 1 eh ${number1}`)
console.log(`a soma dos numeros eh ${sum(number1, number2)}`)


//Funções construtoras
function Person(name){
    this.name = name
    this.walk = function(){
        return "walking"
    }
}
const bianca = new Person("bianca")
console.log(bianca.walk())

//Type conversion
//Alteração de um tipo de dado para outro tipo
console.log('9' + 5)// resultado: 95, pois haverá concatenação, o js opta por obrigar o 5 a se tornar string
console.log(Number('9') + 5)// resultado: 14, js converte string para numero

//Tranformar string em numero e numero em string
let string = "123"
console.log(Number(string))//converteu pra numero
let number = 321
console.log(String(number))//converteu pra string

//Manipulação de dados
//Tamanho de uma string e quantos digitos tem um numero
let word = "bianca"
console.log(word.lenght)//saida = 6
let number = 1234
console.log(String(number).length) // saida = 4, pois tranformou o numero em string, se tornando possivel contabilizar os digitos
//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 32139.1937129
console.log(number.toFixed(2))// passa como parametro o numero de casas decimais que voce quer,nesse caso 2
//saida: 32139.19
console.log(number.toFixed(2).replace(".", ","))//essa função trocará o ponto por virgula
//saida: 32139,19
//Tranformar letras minusculas em maiusculas e vice versa
let word = "Hello World"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
//Separação de strings
let phrase = "I am not sure of what im doing"
let myArray = phrase.split(" ")//pode ser qualquer parametro
//Encontrando palavras em frases
let phrase = "I have no idea"
console.log(phrase.includes("idea"))//retorna true, includes é case sensitive
//Manipulando arrays
let techs = ["html", "css", "js"]
//adicionar um item no fim:
console.log(techs.push("nodejs"))
//adcionar um item no começo:
console.log(techs.unshift("reactjs"))
//remover item do final da array:
console.log(techs.pop())
//remover do começo:
console.log(techs.shift())
//remover um ou mais itens em qualquer posição do array:


