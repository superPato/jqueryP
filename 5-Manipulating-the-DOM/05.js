$(document).ready(function () {
    $('div.chapter a').attr({
        rel: 'external',
        title: 'Learn more at Wikipedia',
        id: function (index, oldValue) {
            return 'wikilink-' + index;
        }
    });
});
