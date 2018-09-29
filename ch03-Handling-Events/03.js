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
    $('#switcher button').click(function (event) {
        var bodyClass = this.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
        event.stopProtagation();
    });
    
});