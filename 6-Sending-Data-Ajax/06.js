$(document).ready(function () {

    $('#letter-a a').click(function(event) {
        event.preventDefault();
        $('#dictionary').load('a.html');
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
        $('#dictionary').load('e.php', requestData);
    });

    $('#letter-f form').submit(function (event) {
        event.preventDefault();
        var formValues = $(this).serialize();
        $.get('f.php', formValues, function (data) {
            $('#dictionary').html(data);
        });
    });
})