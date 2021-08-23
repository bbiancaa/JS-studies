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
// const contatos = document.getElementById('contato')//retorna null caso nao exista
// console.log(contatos);
// //CLASSE e TAG
// const contato = document.getElementsByClassName('grid-section contato')//seleciona pela classe, retorna um HTML colection
// const ul = document.getElementsByTagName('ul')//seleciona todas as ul's e retorna uma html collection
// //SELETOR GERAL ÚNICO - querySelector - retorna o primeiro elemento que combinar com o seu seletor CSS
// const animais = document.querySelector('.animais');//puxa classe
// const contato = document.querySelector('#contato');//puxa item com id
// //SELETOR GERAL LISTA - querySelectorAll - retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// const gridSection = document.querySelectorAll('.grid-section')
// //diferente do getElementByClassName, a lista é estática, ou seja, não ao vivo
// //ARRAY-LIKE - htmlcollection e nodelist são array-like, parecem uma array mas não são. o método
// //de array forEach() por exemplo, existe apenas em NodeList

// //FOREACH - faz um loop em cada elemento da lista
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item){
//     console.log(item)
// })
// //caso um objeto não possua um método array-like, o ideal é transformar em array
// //Como transformar objetos em array:
// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);
// //ARROW FUNCTION -  sintaxe curta em relação a função normal, basta remover apalavra chave function e 
// //adicionar a fat arrow => apos os argumentos
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//     console.log(item);
// })

//CLASS LIST - retorna uma lista com as classes do elemento. Permite adicionar,remover e verificar se contém
const menu = document.querySelector('.menu');
menu.className//string
menu.classList//lista de classes
menu.classList.add('ativo');//adiciona
menu.classList.remove('ativo');
menu.classList.toggle('ativo')//adiciona/remove a classe
menu.classList.contains('ativo')//true or false
menu.classList.replace('ativo', 'inativo') 
//ATTRIBUTES - retorna uma array-like com os atributos do elemento
const animais = document.querySelector('.animais');
animais.attributes//retorna todos os atributos, parece um objeto mas é array
animais.attributes[0]//retorna o primeiro atributo 
//GETATRIBUTTE e SETATTRIBUTE - métodos que retornam ou definem de acordo com o objeto selecionado
const img = document.querySelector('img');
img.getAttribute('src')//valor do src
img.setAttribute('alt', 'Lala') //muda o alt, o set cria um atributo se não existir ou apenas atualiza
img.hasAttribute('id') //true or false
img.removeAttribute('alt');
img.hasAttributes()//true or false se tem algum atributo

//HEIGHT e WIDTH - são propriedades e métodos dos objetos Element e HTMLElement, a maioria é read only
const section = document.querySelector('.animais');
section.clientHeight;//client + padding

//ADD EVENTLISTENER - adiciona uma função ao elemento, esta chamada de callback, que será ativada
//assim que certo evento ocorrer nesse elemnto
const img = document.querySelector('img');
//elemento.addEventListener(event, callback, options) //3 parametro eh opcional
img.addEventListener('click', function(){
    console.log('clicou')
})

//TRANSVERSING e MANIPULAÇÃO
//propriedades que retornam uma string contendo o html ou texto, sendo possivel atribuir um novo
//elemento nas mesmas
const menu = document.querySelector('.menu');
menu.outerHTML; //todo o html do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags
//TRANSVERSING - como navegar pelo DOM, utilizando suas propriedades e métodos
const lista = document.querySelector('.animais-lista');
lista.parentElement
lista.children
//and lots of more
lista.appendChild(lista)//move lista para o final
lista.removeChild(lista)
//and lots of more
