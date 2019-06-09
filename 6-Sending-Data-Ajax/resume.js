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