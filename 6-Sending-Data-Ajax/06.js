$(document).ready(function () {

    // Exercise 1
    // $('#dictionary').load('exercises-content.html .letter');

    // Exercise 2
    // $('.letter a').hover(function () {
    //     var $linkSelected = $(this);
    //     var letter = $linkSelected.parent().parent().attr('id');

    //     $('#dictionary').load('exercises-content.html #' + letter);

    // }, function () {
    //     $('#dictionary').html('');
    // });

    // Exercise 3 
    // $('#dictionary').load('doesnt-exist.html .letter', function (data, status, jqXHR) {
    //     $(this).html(jqXHR.responseText);
    // });

    // Exercise 4
    $.getJSON('https://api.github.com/users/jquery/repos?callback=?', function (response) {
        var html = '';
        $.each(response.data, function (entryIndex, entry) {
            html += '<div class="entry">';
            html += '<h3 class="term">' + entry.name + '</h3>';
            html += '<div class="part">' + entry.owner.type + '</div>';
            html += '<div class="definition">' + entry.description + '</div>';
            html += '</div>';
        });

        $('#dictionary').html(html);
    });

    var $loading = $('<div id="loading">Loading...</div>')
        .insertBefore('#dictionary');

    $(document).ajaxStart(function () {
        $loading.show();
    }).ajaxStop(function () {
        $loading.hide();
    });

    $('#letter-a a').click(function(event) {
        event.preventDefault();
        $('#dictionary').hide().load('a.html', function () {
            $(this).fadeIn();
        });
    });

    $('#letter-b a').click(function (event) {
        event.preventDefault();
        $.getJSON('b.json', function (data) {
            var html = '';
            $.each(data, function(entryIndex, entry) {
                html += '<div class="entry">';
                html += '<h3 class="term">' + entry.term + '</h3>';
                html += '<div class="part">' + entry.part + '</div>';
                html += '<div class="definition">' + entry.definition;
                if (entry.quote) {
                    html += '<div class="quote">';
                    $.each(entry.quote, function(lineIndex, line) {
                        html += '<div class="quote-line">' + line + '</div>';
                    });
                    if (entry.author) {
                        html += '<div class="quote-author">' + entry.author + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>'
                html += '</div>';
            });
            $('#dictionary').html(html);
        });
    });

    $('#letter-c a').click(function (event) {
        event.preventDefault();
        $.getScript('c.js');
    });

    $('#letter-d a').click(function (event) {
        event.preventDefault();
        $.get('d.xml', function (data) {
            $('#dictionary').empty();
            $(data).find('entry:has(quote[author])').each(function () {
                var $entry = $(this);
                var html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
                html += '<div class="definition">';
                html += $entry.find('definition').text();

                var $quote = $entry.find('quote');
                html += '<div class="quote">';
                $quote.find('line').each(function () {
                    html += '<div class="quote-line">' + $(this).text() + '</div>';
                });
                html += '<div class="quote-author">' + $quote.attr('author') + '</div>';
                html += '</div>';

                html += '</div>';
                html += '</div>';
                $('#dictionary').append($(html));
            });
        });
    });


    $('#letter-e a').click(function(event) {
        event.preventDefault();
        var requestData = { term: $(this).text() };
        $.get('z.php', requestData, function(data) {
            $('#dictionary').html(data);
        }).fail(function (jqXHR) {
            $('#dictionary')
                .html('An error ocurred: ' + jqXHR.status)
                .append(jqXHR.responseText);
        })
    });

    $('#letter-f form').submit(function (event) {
        event.preventDefault();
        var formValues = $(this).serialize();
        $.get('f.php', formValues, function (data) {
            $('#dictionary').html(data);
        });
    });


    $('body').on('click', 'h3.term', function () {
        $(this).siblings('.definition').slideToggle();
    });


    var url = 'http://examples.learningjquery.com/jsonp/g.php';
    $('#letter-g a').click(function (event) {
        event.preventDefault();
        
        $.getJSON(url + '?callback=?', function (data) {
            var html = '';
            $.each(data, function (entryIndex, entry) {
                html += '<div class="entry">';
                html += '<h3 class="term">' + entry.term + '</h3>';
                html += '<div class="part">' + entry.part + '</div>';
                html += '<div class="definition">' + entry.definition;
                if (entry.quote) {
                    html += '<div class="quote">';
                    $.each(entry.quote, function (lineIndex, line) {
                        html += '<div class="quote-line">' + line + '</div>';
                    });
                    if (entry.author) {
                        html += '<div class="quote-author">' + entry.author + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
            });

            $('#dictionary').html(html);
        });
    });

    // Loading parts of an HTML page
    $('#letter-h a').click(function (event) {
        event.preventDefault();
        $('#dictionary').load('h.html .entry');
    });
})