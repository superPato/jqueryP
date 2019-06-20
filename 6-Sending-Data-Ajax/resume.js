// Ajax calls are by default asynchronous.

// Asynchronous loading means that once the HTTP request to retrieve the HTML
// snippet is issued, script execution immediately resumes without waiting.

// Process XML
// The advanced selector engine inside jQuery facilitates finding parts of the XML
// document in much more complicated situations as well. For example, suppose we
// wanted to limit the displayed entries to those that have quotes that in turn have
// attributed authors.
$(data).find('entry:has(quote[author])').each(function() { 
    // process
});

// We can further simplify the code by using the .load() method, which uses POST 
// by default when it is supplied with a simple object containing data to pass along:

// Keeping an eye on the request
// So far, it has been sufficient for us to make a call to an Ajax method and 
// patiently await the response. At times, though, it is handy to know a bit 
// more about the HTTP request as it progresses. If such a need arises, jQuery 
// offers a suite of functions that can be used to register callbacks when 
// various Ajax-related events occur.

// The .ajaxStart() and .ajaxStop() methods are two examples of these observer
// functions. When an Ajax call begins with no other transfer in progress, the 
// .ajaxStart() callback is fired. Conversely, when the last active request ends, 
// the callback attached with .ajaxStop() will be executed. All of the observers 
// are global, in that they are called when any Ajax communication occurs, 
// regardless of what code initiates it. And all of them, like the .ready() 
// method, can only be bound to $(document).


// Error handling
// Aside from using the global .ajaxError() method, we can react to errors by
// capitalizing on jQuery's deferred object system. We will discuss deferred objects
// more fully in Chapter 11, Advanced Effects, but for now we'll simply note that we
// can chain .done(), .always(), and .fail() methods to any Ajax function except
// .load(), and use these methods to attach the relevant callbacks. For example, if we
// take the code from Listing 6.16 and change the URL to one that doesn't exist, we can
// test the .fail() method:

// The .status property contains a numeric code provided by the server. These codes
// are defined in the HTTP specification, and when a .fail() handler is triggered, they
// will represent an error condition such as:

// Response code       Description
// 400                 Bad request
// 401                 Unauthorized
// 403                 Forbidden
// 404                 Not found
// 500                 Internal server error


// Ajax and events

// When a term is clicked, this code finds siblings of the element that have a class of
// definition, and slides them up or down as appropriate.

// All seems in order, but a click does nothing with this code. Unfortunately, the terms
// have not yet been added to the document when we attach the click handlers. Even
// if we managed to attach click handlers to these items, once we clicked on a different
// letter the handlers would no longer be attached.

// This is a common problem with areas of a page populated by Ajax. A popular
// solution is to rebind handlers each time the page area is refreshed. This can be
// cumbersome, however, as the event-binding code needs to be called each time
// anything causes the DOM structure of the page to change.

// An often superior alternative was introduced in Chapter 3, Handling Events. We can
// implement event delegation, actually binding the event to an ancestor element that
// never changes. In this case, we'll attach the click handler to the <body> element,
// using .on() to catch our clicks that way: