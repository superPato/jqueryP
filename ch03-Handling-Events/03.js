$(document).ready(function () {

    $('#switcher').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    var toggleSwitcher = function (event) {
        if (! $(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click', toggleSwitcher);

    $('#switcher-default').addClass('selected');

    $('#switcher').on('click', 'button', function (event) {
        var bodyClass = event.target.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
        
        $('#switcher').off('click', toggleSwitcher);
        if (this.id == 'switcher-default') {
            $('#switcher').on('click', toggleSwitcher);
        }
    });

    $('#switcher').click();

    var triggers = {
        D: 'default',
        N: 'narrow',
        L: 'large'
    };
    $(document).keyup(function (event) {
        // event.which devuelve el codigo ASCII de la tecla que se presionó
        var key = String.fromCharCode(event.which);
        if (key in triggers) {
            $('#switcher-' + triggers[key]).click();
        }
    })
    
});