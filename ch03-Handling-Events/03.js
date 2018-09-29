$(document).ready(function () {

    $('#switcher').on('click.collapse', function (event) {
        if (! $(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    });

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

    $('#switcher-narrow, #switcher-large').click(function () {
        $('#switcher').off('click.collapse');
    });
    
});