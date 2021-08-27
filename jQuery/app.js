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