$(document).ready(function () {
	
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');

	$('#switcher button').click(function () {
		var num = parseFloat($speech.css('fontSize'));

		switch (this.id) {
			case 'switcher-large':
				num *= 1.4;
				break;
			case 'switcher-small':
				num /= 1.4;
				break;
			default:
				num = parseFloat(defaultSize);
		}

		$speech.animate({fontSize: num + 'px'}, 'slow');
	});

	//
	var $firstPara = $('p').eq(1);
	$firstPara.hide();

	$('a.more').click(function (event) {
		event.preventDefault();

		$firstPara.animate({ 
			opacity: 'toggle',
			height: 'toggle'
		}, 'slow');

		var $link = $(this);

		if ($link.text() == 'read more') {
			$link.text('read less');
		} else {
			$link.text('read more');
		}
	});

	// Animate switcher
	$('div.label').click(function () {
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();

		$switcher
			.css({position: 'relative'})
			.fadeTo('fast', 0.5)
			.animate({
				left: paraWidth - switcherWidth
			}, 
			{
				duration: 'slow',
				queue: false
			})
			.fadeTo('slow', 1.0)
			.slideUp('slow')
			// el método .queue () agrega la función a la cola de 
			// efectos para que se ejecute en los elementos coincidentes.
			.queue(function (next) {
				$switcher.css({backgroundColor: '#f00'});
				// La inclusión de esta llamada a la función next() permite 
				// a la cola de animación continuar donde la dejó y completar
				// la cadena con la siguiente línea.
				next();
			})
			.slideDown('slow');
	});

});