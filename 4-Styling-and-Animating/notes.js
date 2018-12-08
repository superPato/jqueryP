// Get a single property's value
.css('property')
// returns "value"

// Get multiple properties' values
.css(['property1', 'property-2'])
// returns {"property1": "value1", "property-2": "value2"}

// Single property and its value
.css('property', 'value')
// Object of property-value pairs
.css({
	property1: 'value1',
	'property-2': 'value2'
})

Creando animaciones personalizadas
Además de los métodos de efectos creados previamente, jQuery proporciona 
un método poderoso .animate () que nos permite crear nuestras propias 
animaciones personalizadas con un control de grano fino. El método .animate () 
viene en dos formas. El primero lleva hasta cuatro argumentos:

• Un objeto de propiedades y valores de estilo, que es similar al 
  argumento .css () discutido anteriormente en este capítulo.
• Una duración opcional, que puede ser una de las cadenas predefinidas 
  o un número de milisegundos
• Un tipo de suavizado opcional, que es una opción que no usaremos ahora, 
  pero que analizaremos en el Capítulo 11, Efectos avanzados
• Una función de devolución de llamada opcional, que se explicará más 
  adelante en este capítulo.

Todos juntos, los cuatro argumentos se ven así:

.animate(
	{property1: 'value1', property2: 'value2'},
	duration, 
	easing, 
	function() {
		alert('The animation is finished.');
	}
);

La segunda forma toma dos argumentos: un objeto de propiedades y un objeto de opciones:

.animate({properties}, {options})

En efecto, el segundo argumento envuelve los argumentos segundo a cuarto de 
la primera forma en otro objeto y agrega algunas opciones más avanzadas a 
la mezcla.

.animate(
	{
		property1: 'value1',
		property2: 'value2'
	}, 
	{
		duration: 'value',
		easing: 'value',
		specialEasing: {
			property1: 'easing1',
			property2: 'easing2'
		},
		complete: function() {
			alert('The animation is finished.');
		},
		queue: true,
		step: callback
	}
);

el método .animate () proporciona valores abreviados convenientes para las 
propiedades CSS, como 'mostrar', 'ocultar' y 'alternar', para facilitar el 
proceso cuando queremos emular el comportamiento de los métodos de efectos 
preenvasados como como .slideToggle ().

Además, no solo tenemos a nuestra disposición las propiedades de estilo 
utilizadas para los métodos de efectos abreviados, sino también propiedades 
numéricas de CSS como left, top, fontSize, margin, padding y borderWidth.


Efectos simultáneos versus en cola
El método .animate (), como acabamos de descubrir, es muy útil para crear 
efectos simultáneos que afectan a un conjunto particular de elementos. Puede 
haber ocasiones, sin embargo, cuando deseamos poner en cola nuestros efectos 
para que se produzcan uno tras otro.

Trabajando con un solo conjunto de elementos.
Al aplicar múltiples efectos al mismo conjunto de elementos, la cola se logra 
fácilmente encadenando esos efectos.

$switcher
	.css({position: 'relative'})
	.animate({left: paraWidth - switcherWidth}, 'slow')
	.animate({height: '+=20px'}, 'slow')
	.animate({borderWidth: '5px'}, 'slow');