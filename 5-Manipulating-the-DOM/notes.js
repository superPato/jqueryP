// Manipulation the DOM
//
// jQuery provides the.attr() and .removeAttr() methods. These methods
// make changing an attribute a simple matter.

$('selector').attr('attribute', 'value');

$('selector').attr({
    rel: 'external',
    title: 'Learn more at Wikipedia'
});

// Value callbacks
//
// To set a unique id value for each link, we can harness another feature
// of jQuery methods such as .css() and .each() —value callbacks.
//
// A value callback is simply a function that is supplied instead of the
// value for an argument. This function is then invoked once per element in
// the matched set. Whatever data is returned from the function is used as
// the new value for the attribute
$('selector').attr({
                         // oldValue id
    id: function (index, oldValue) {
        return 'wikilink-' + index;
    }
});
