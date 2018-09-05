$('.menu li a').on('click', activarMarcador);


function activarMarcador(event){

	var anchoBoton = $(this).css('width');
	var posicionBoton = $(this).position().left;


	$('#marcador').animate({'width': anchoBoton, 'left':posicionBoton}, 200);


event.preventDefault();
}