// //DOM - document object model
// //É uma interface que representa documentos html e xml através de objetos. 
// //Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos

// //métodos e propriedades são acessados através do ponto(.)
// //ex:
// window.innerHeight;//retorna a altura do browser
// //window é o objeto global do browser
// console.log(window);
// window.alert('isso eh um alerta');
// document.querySelector('h1')//seleciona o primeiro h1
// document.body //retorna o body

// //NODE
// //toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades
// //Element é um tipo de objeto Node
// const titulo = document.querySelector('h1');
// titulo.innerText//retorna o texto
// titulo.classList//retorna as classes
// titulo.id//retorna o id
// titulo.offsetHeight//retorna a altura do elemento
// titulo.addEventListener('click', callback); //ativa a função callback ao click no titulo

// //Função anônima:
// const h1Selecionado = document.querySelector('h1');
// h1Selecionado.addEventListener('click', function(){
//     console.log('Clicou em ', h1Selecionado.innerText);
// })

//SELEÇÃO DE ELEMENTOS
//ID - seleciona e retorna os elementos do DOM
const contatos = document.getElementById('contato')//retorna null caso nao exista
console.log(contatos);
//CLASSE e TAG
const contato = document.getElementsByClassName('grid-section contato')//seleciona pela classe, retorna um HTML colection
const ul = document.getElementsByTagName('ul')//seleciona todas as ul's e retorna uma html collection
//SELETOR GERAL ÚNICO - querySelector - retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');//puxa classe
const contato = document.querySelector('#contato');//puxa item com id
//SELETOR GERAL LISTA - querySelectorAll - retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSection = document.querySelectorAll('.grid-section')
//diferente do getElementByClassName, a lista é estática, ou seja, não ao vivo
//ARRAY-LIKE - htmlcollection e nodelist são array-like, parecem uma array mas não são. o método
//de array forEach() por exemplo, existe apenas em NodeList

//FOREACH - faz um loop em cada elemento da lista
const imgs = document.querySelectorAll('img');
imgs.forEach(function(item){
    console.log(item)
})
//caso um objeto não possua um método array-like, o ideal é transformar em array
//Como transformar objetos em array:
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
//ARROW FUNCTION -  sintaxe curta em relação a função normal, basta remover apalavra chave function e 
//adicionar a fat arrow => apos os argumentos
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
    console.log(item);
})
