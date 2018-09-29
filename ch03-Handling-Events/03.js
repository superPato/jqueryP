$(document).ready(function () {

    $('#switcher').click(function (event) {
        $('#switcher button').toggleClass('hidden');
    });

    $('#switcher h3').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    $('#switcher-default').addClass('selected');
    $('#switcher').click(function (event) {
        //
        if ($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            $('body').removeClass().addClass(bodyClass);
            $('#switcher button').removeClass('selected');
            $(event.target).addClass('selected');
            event.stopProtagation();
        }
    });
    
});