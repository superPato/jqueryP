$(document).ready(function () {

    $('#switcher').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    $('#switcher-default').addClass('selected');
    //
    $('#switcher').on('click', 'button', function (event) {
        var bodyClass = event.target.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });

    var toggleSwitcher = function (event) {
        if (! $(event.target).is('button')) {
            console.log("Se ejecuto");
            $('#switcher button').toggleClass('hidden');
        }
    };
    // Se enlaza el manejador de eventos al swicher
    // cuando se ejecuta el script
    $('#switcher').on('click.collapse', toggleSwitcher);

    $('#switcher-narrow, #switcher-large').click(function () {
        $('#switcher').off('click.collapse');
    });

    // Si se da clic por segunda vez, sin haberse dado click
    // en #switcher-narrow o #switcher-large, se enlaza un
    // segundo manejador de eventos para #switcher. Por lo tanto
    // toggleSwitcher se ejecutara dos veces.
    $('#switcher-default').click(function () {
        $('#switcher').on('click.collapse', toggleSwitcher);
    });
    
});