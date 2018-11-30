// Get a single property's value
.css('property')
// returns "value"

// Get multiple properties' values
.css(['property1', 'property-2'])
// returns {"property1": "value1", "property-2": "value2"}

// Single property and its value
.css('property', 'value')
// Object of property-value pairs
.css({
	property1: 'value1',
	'property-2': 'value2'
})