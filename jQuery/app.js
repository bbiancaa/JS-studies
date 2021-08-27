//JS puro
//document.getElementById("button");
//jQuery
//$("#button");
//$ - nome da variavel
//$('.target').hide();
//  objeto      metodo

//ID 
//$('#meuId');

//Classe
//$('.minhaClasse');
$('.first').hide();//esconde classe first

$('ul li a').hide();
//Selecionar por atributo
$('a[href^="#"]').hide();//esconde todos que começam com #

//Selecionar múltiplos elementos
$('prieiroElemento, div').hide();

//Salvar seleção de variável
//var $meuId = $('#meuId');

//Verificar se elemento existe
if ($('#meuId').length){
    console.log('Meu Id existe')//no console da o length caso exista, se nao o length fica 0, ou seja, false
}

//Modo de inserir conteúdo
//.append() - adiciona conteúdo ao final do item selecionado(dentro da tag)
$('p').append(' <span>Adiciona ao final</span>');//aqui seleciona todos os paragrafos e adiciona a frase ao final
//Remove o elemento da posição original e move ele para os itens selecionados:
$('p').append($('ul'));
//.appendTo() - o conteúdo do objeto jQuery que será adicionado ao parametro do appendTo
$('<p>Adicionar p</p>').appendTo('ul');

//.html('conteudo') - substitui o conteúdo de todos os itens selecionados pelo parametro
$('.blog-post').html('Teste');//vai virar teste

//.text() - pega o conteúdo de todos os itens que fizeram parte da seleção e junta em uma única string
$('p').text();

//.prepend() e .prependTo() - mesma coisa que append, porem insere antes do conteúdo da seleção
$('h1').prepend('Teste');

//Modo de inserção outside e around
//.after() e .insertAfter - adiciona conteúdo após o item selecionado
$('h2').after('blabla');
$('blabla').insertAfter('h2');

//.before() e insertBefore() - adiciona o conteúdo antes do item selecionado
$('h2').before('blabla');
$('blabla').insertBefore('h2');

//.wrap() - envolve o conteúdo selecionado nas tags especificadas
$('p').wrap('<div class="azul"></div>'); //ent]ao todo paragrafo que tiver no site, vai ser colocado nessa div
//tem que colocar as tags que vc quer envoler, não pode ser string pura

//.unwrap() - remove o elemento pai do item selecionado
$('ul li a').unwrap();

//Eventos básicos
//.click() aciona uma função após o usuário clicar no target
$('a').click(function(){
    $('a').text('Clicou');//o botao em si muda p/ Clicou
});

//os eventos também podem ser escritos usando a função .on
$('a').on('click',function(){
    $('a').text('Clicou');//o botao em si muda p/ Clicou
});

//use o this para se referir ao objeto do evento
$('a').on('click',function(){
    $(this).text('Clicou');//vai conversar exatamente com o objeto que clicou
});

//Event object
$('a').on('click', function(e){//o parametro virara um objeto de evento, que tem muita coisa linkada a ele
    e.preventDefault();//previne o comportamento padrão desse objeto
    $(this).text('Clicou');
});

//mouseenter, primeira etapa do hover
$('a').on('mouseenter', function(e){
    e.preventDefault();
    $(this).text('Mouse Hover');
});

//mouseleave, segunda parte do hover
$('a').on('mouseleave', function(e){
    e.preventDefault();
    $(this).text('Mouse Hover');
});

//scroll
$(document).on('scroll', function(){
    $('a').append('Colocou o mouse')
})

//resize
$(window).resize(function(){
    $('a').text($('body').width())
})

//Classes
//.addClass() - adiciona uma ou mais classe ao elemento
$('a').click(function(){
    $(this).addClass('active');
});

//.removeClass() - remove uma ou mais classe ao elemento
$('a').click(function(){
    $(this).removeClass('active');
});

//.toggleClass() - adiciona a classe ao elemento caso ela não exista ou remove caso ela exista
$('a').click(function(){
    $(this).toggleClass('active');
});

//hasClass() - verifica se a classe existe e retorna true ou false
$('a').click(function(){
    var condition = $(this).hasClass('active');
    if (condition){
        console.log('Possui a classe');
    }
});

//ex utilizando os conceitos
$('.abrir-modal').click(function(){
    $('.modal').toggleClass('active');
    var condicao = $('.modal').hasClass('active');
    if(condicao){
        $(this).text('Fechar Modal');
    }else{
        $(this).text('Abrir Modal')
    }
});