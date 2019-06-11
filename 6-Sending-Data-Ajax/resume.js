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