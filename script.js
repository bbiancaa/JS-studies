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