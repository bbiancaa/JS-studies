//DOM - document object model
//É uma interface que representa documentos html e xml através de objetos. 
//Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos

//métodos e propriedades são acessados através do ponto(.)
//ex:
window.innerHeight;//retorna a altura do browser
//window é o objeto global do browser
console.log(window);
window.alert('isso eh um alerta');
document.querySelector('h1')//seleciona o primeiro h1
document.body //retorna o body

//NODE
//toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades
//Element é um tipo de objeto Node
const titulo = document.querySelector('h1');
titulo.innerText//retorna o texto
titulo.classList//retorna as classes
titulo.id//retorna o id
titulo.offsetHeight//retorna a altura do elemento
titulo.addEventListener('click', callback); //ativa a função callback ao click no titulo

//Função anônima:
const h1Selecionado = document.querySelector('h1');
h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em ', h1Selecionado.innerText);
})