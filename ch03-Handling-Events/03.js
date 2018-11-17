$(document).ready(function () {

    // Enable hover effect on the style switcher
    $('#switcher').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    // Allow the style switcher to expand and collapse
    var toggleSwitcher = function (event) {
        if (! $(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click', toggleSwitcher);

    // Simulate a click so we start in a collapse state
    $('#switcher').click();

    // The setBodyClass() function changes the page style
    // The style switcher state is also updated
    var setBodyClass = function (className) {
        $('body').removeClass().addClass(className);
        $('#switcher button').removeClass('selected');
        $('#switcher-' + className).addClass('selected');
        
        $('#switcher').off('click', toggleSwitcher);
        if (className == 'default') {
            $('#switcher').on('click', toggleSwitcher);
        }
    };
    // Gegin with the switcher-default button "selected"
    $('#switcher-default').addClass('selected');

    // Map key codes to their corresponding buttons to click
    var triggers = {
        D: 'default',
        N: 'narrow',
        L: 'large'
    };

    // Call setBodyClass() when a buton is clicked
    $('#switcher').click(function (event) {
        if ($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            setBodyClass(bodyClass);
        }
    });

    // Call setBodyClass() when a key is pressed
    $(document).keyup(function (event) {
        var key = String.fromCharCode(event.keyCode);
        if (key in triggers) {
            setBodyClass(triggers[key]);
        }
    });

    // 1. When Charles Dickens is clicked, apply the selected style to it.
    $('.author').click(function () {
        $(this).addClass('selected');
    });
    
    // 2. When a chapter title (<h3 class="chapter-title">) is double-clicked,
    //  toggle the visibility of the chapter text.
    $('.chapter-title').dblclick(function () {
        $(this).siblings().toggleClass('hidden');
    });

    // 3. When the user presses the right arrow key, cycle to the next body class.
    // The key code for the right arrow key is 39.
    $(document).keyup(function (event) {
        if (event.which == 39) {
            console.log("Righ arrow key");
        }
    });

    // 4. Challenge: Use the console.log() function to log the coordinates 
    // of the mouse as it moves across any paragraph. 
    // $('p').mousemove(function (event) {
    //     console.log("position x: " + event.pageX + ", position Y: " + event.pageY);
    // });

    // 5. Challenge: Use .mousedown() and .mouseup() to track mouse events anywhere 
    // on the page. If the mouse button is released above where it was pressed, 
    // add the hidden class to all paragraphs. If it is released below where it 
    // was pressed, remove the hidden class from all paragraphs.
    var mousedownY = 0;
    $(document).mousedown(function (event) {
        mousedownY = event.pageY;
    });

    $(document).mouseup(function (event) {
        if (mousedownY > event.pageY) {
            $('p').addClass('hidden');
        } else {
            $('p').removeClass('hidden');
        }

    });
});