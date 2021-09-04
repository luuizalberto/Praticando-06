$(function(){

	$('nav a').click(function(){
		var href = $(this).attr('href'); // Pegar o atributo href para sobre aonde a gente tem q ir.
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});// nova animação, faz com que nosso scroll desça sozinho.
	
		return false;// se não o link vai automaticamente para outra página.
	})

})