$(document).ready(function () {
    $('div.chapter a[href*="wikipedia"]').attr({
        rel: 'external',
        title: function () {
            return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
        },
        id: function (index, oldValue) {
            return 'wikilink-' + index;
        }
    });

    // Exercise 1
    $('<a href="#top">back to top</a>')
        .insertAfter('div.chapter p:nth-child(n+4)')
        .click(function () { // Exercise 2
            var $currentElement = $(this);

            if ($currentElement.next().text() != 'You were here.') {
                $currentElement.after('<p>You were here.</p>');
            }
        });
    $('<a id="top"></a>').prependTo('body');

    // Exercise 3 and Exercise 4
    $('#f-author').on('click', function () {
        $element = $(this);

        ($element.has('b').length == 1) 
            ? $element.text($element.text())
            : $element.wrapInner('<b></b>');
    });

    // Exercise 5
    $('.chapter p').each(function (element) {
        this.className = this.className + ' inhabitants';
    });

    var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
    $('span.footnote').each(function (index) {
        $(this)
            .before([
                '<a href="#footnote-',
                index + 1,
                '" id="context-',
                index + 1,
                '" class="context">',
                '<sup>',
                index + 1,
                '</sup>'
            ].join(''))
            .appendTo($notes)
            .append([
                '&nbsp; (<a href="#context-',
                index + 1,
                '">context</a>)',
            ].join(''))
            .wrap('<li id="footnote-' + (index + 1) + '"></li>');
    });

    // Cloning for pull quotes
    $('span.pull-quote').each(function (index) {
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position', 'relative');

        var $clonedCopy = $(this).clone();
        $clonedCopy
            .addClass('pulled')
            .find('span.drop')
                .html('&hellip;')
            .end() 
            .text($clonedCopy.text()) // text() gets only text without tags html
            .prependTo($parentParagraph);
    })
});
