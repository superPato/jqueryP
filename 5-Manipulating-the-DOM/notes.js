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

// DOM element properties
// As mentioned briefly previously, there is a subtle distinction between 
// HTML attributes and DOM properties. Attributes are the values given in 
// quotation marks in the HTML source for the page, while properties are 
// the values as accessed by JavaScript. 

// Some DOM properties, such as nodeName , nodeType , selectedIndex , 
// and childNodes , have no equivalent attribute, and therefore are not accessible via .attr() .

// We can get and set properties from jQuery using the .prop() method:
// Get the current value of the "checked" property
var currentlyChecked = $('.my-checkbox').prop('checked');
// Set a new value for the "checked" property
$('.my-checkbox').prop('checked', false);

// The value of form controls
// Perhaps the most troublesome difference between attributes and properties arises
// when trying to get or set the value of a form control. For text inputs, the value
// attribute is equivalent to the defaultValue property, not the value property. For
// select elements, the value is usually obtained via the element's selectedIndex
// property or the selected property of its option elements.

// Because of these discrepancies, we should avoid using .attr() —and, in the case of
// select elements, even .prop() —to get or set form element values. Instead, we can
// use the .val() method, which jQuery provides for these occasions:

// Get the current value of a text input
var inputValue = $('#my-input').val();
// Get the current value of a select list
var selectValue = $('#my-select').val();
//Set the value of a single select list
$('#my-single-select').val('value3');
// Set the value of a multiple select list
$('#my-multi-select').val(['value1', 'value2']);

// As with .attr() and .prop() , .val() can take a function for its setter argument.
// With its multi-purpose .val() method, jQuery yet again makes developing for the
// web much easier.


// DOM tree manipulation
// The $() function revisited
// This isn't all that the $() function can do, however. It also boasts a feature so
// powerful that it can change not only the visual appearance but also the actual
// contents of a page. Simply by passing a snippet of HTML code to the function, we
// can create an entirely new DOM structure from thin air.

// Creating new elements
$('<a href="#top">back to top</a>');

// Inserting new elements
$('<a href="#top">back to top</a>').insertAfter('div.chapter p');

// • .insertBefore() adds content outside of and before existing elements
// • .prependTo() adds content inside of and before existing elements
// • .appendTo() adds content inside of and after existing elements
// • .insertAfter() adds content outside of and after existing elements

// Moving elements
$('selector').insertBefore('destin');


// Using inverted insertion methods

// Each of the insertion methods, such as .insertBefore() or .appendTo() , has a
// corresponding inverted method. The inverted methods perform exactly the same
// task as the standard ones, but the subject and target are reversed. For example:
$('<p>Hello</p>').appendTo('#container');
// is the same as:
$('#container').append('<p>Hello</p>');

// Insertion method callbacks
// The inverted insertion methods can accept a function as an argument,
// much like .attr() and .css() can. This function is invoked once per
// target element, and should return the HTML string to be inserted.

// Copying elements
// For copying elements, jQuery's .clone() method is just what we need; it takes
// any set of matched elements and creates a copy of them for later use. As in the case
// of the $() function's element-creation process we explored earlier in this chapter,
// the copied elements will not appear in the document until we apply one of the
// insertion methods.

// For example, the following line creates a copy of the first paragraph inside <div
// class="chapter"> :
$('div.chapter p:eq(0)').clone();
// This alone is not enough to change the content of the page. We can make the cloned
// paragraph appear before <div class="chapter"> with an insertion method:
$('div.chapter p:eq(0)').clone().insertBefore('div.chapter');

// Clone with events
// The .clone() method, by default, does not copy any events
// that are bound to the matching element or any of its descendants.
// However, it can take a single Boolean parameter that, when set to true
// (.clone(true)), clones events as well. This convenient event cloning
// allows us to avoid having to deal with manually rebinding events, as
// was discussed in Chapter 3, Handling Events.

// When called without arguments, .html() returns a string representation of the
// HTML entity inside the matched element.

// Like .html() , the .text() method can either retrieve the content of the matched
// element or replace its content with a new string. Unlike .html() , however, .text()
// always gets or sets a plain text string. When .text() retrieves content, all of the
// included tags are ignored, and HTML entities are translated into plain characters.
// When it sets content, special characters such as < are translated into their HTML
// entity equivalents:

// DOM manipulation methods in a nutshell
// • To create new elements from HTML, use the $() function
// • To insert new elements inside every matched element, use the
//   following functions:

	° .append()
	° .appendTo()
	° .prepend()
	° .prependTo()

// • To insert new elements adjacent to every matched element, use the
//   following functions:

	° .after()
	° .insertAfter()
	° .before()
	° .insertBefore()

// • To insert new elements around every matched element, use the
//   following functions:

	° .wrap()
	° .wrapAll()
	° .wrapInner()

// • To replace every matched element with new elements or text, use the
//   following functions:

	° .html()
	° .text()
	° .replaceAll()
	° .replaceWith()

// • To remove elements inside every matched element, use the
//   following function:

	° .empty()

// • To remove every matched element and descendants from the document
//   without actually deleting them, use the following functions:

	° .remove()
	° .detach()