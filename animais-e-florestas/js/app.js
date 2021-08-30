$(document).ready(function(){
	var classActive = 'active';
	//ativa ao clicar, abrindo uma tab, com as infos do animal clicado
	$('.animais .tab-menu a').first().addClass(classActive);
	$('.animais .item').first().addClass(classActive);

	$('.animais .tab-menu a').click(function(e){
		e.preventDefault();
		var itemId = $(this).attr('href');
		//abaixo remove a classe e adiciona logo depois pra abrir um por vez
		$('.animais .tab-menu a, .animais  .item').removeClass(classActive);
		$(this).addClass(classActive);
		$(itemId).addClass(classActive);
	});

	$('.florestas .tab-menu a').first().addClass(classActive);
	$('.florestas .item').first().addClass(classActive);

	$('.florestas .tab-menu a').click(function(e){
		e.preventDefault();
		var itemId = $(this).attr('href');

		$('.florestas .tab-menu a, .florestas  .item').removeClass(classActive);
		$(this).addClass(classActive);
		$(itemId).addClass(classActive);
	});
});