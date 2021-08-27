// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
// 2 - Ditância entre o elemento e o topo
// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// 5 - A classe deve mostrar e animar o elemento

$(window).scroll(function() {
	var windowTop = $(this).scrollTop();
	$('.anime').each(function(){
		if(windowTop > $(this).offset().top - 400) {
			$(this).addClass('anime-init');
		} else {
			$(this).removeClass('anime-init');
		}
	});
});