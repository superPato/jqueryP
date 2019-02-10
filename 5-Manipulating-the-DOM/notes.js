Manipulation the DOM

jQuery provides the.attr() and .removeAttr() methods. These methods
make changing an attribute a simple matter.

$('selector').attr('attribute', 'value');

$('selector').attr({
    rel: 'external',
    title: 'Learn more at Wikipedia'
});
