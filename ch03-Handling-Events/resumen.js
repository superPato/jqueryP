.on()
Este método nos permite especificar cualquier evento DOM y 
adjuntarle un comportamiento.

PROPAGACIÓN DE EVENTOS
	Captura(capturing) de evento: 
	Se da cuando el elemento más general es el que primero tiene la oportunidad
	de manejar el evento.
	Burbujeo(bubbling) de evento:
	Se da duando el elemento más especifico es el que tiene primero la oportunidad
	de manejar el evento.


JQuery siempre usa bubbling phase model


Detener la propagación de eventos
	El objeto de evento proporciona el método .stopPropagation (), que puede detener el
	proceso de burbujeo completamente para el evento. Al igual que .target, 
	este método es una función DOM básica, pero no se puede usar de forma 
	segura como tal en Internet Explorer 8 o anterior.

Uso de las funciones incorporadas de delegación de eventos
	Debido a que la delegación de eventos puede ser útil en muchas situaciones, jQuery incluye un conjunto
	de herramientas para ayudar a los desarrolladores a usar esta técnica. El método .on () ya lo tenemos
	discutido puede realizar delegación de eventos cuando se proporciona con los parámetros adecuados: