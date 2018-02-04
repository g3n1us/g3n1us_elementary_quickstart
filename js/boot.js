// Set some options; defaults are shown below
var config = {
	development: true,
	containing_element: '#elementary_container', // this is the element that the app will load into. If it doesn't exist, it will be prepended to 'body'
	use_hash: true, // Use hash based URIs instead of popstate
	hash_prefix: '#'
}

// instantiate the application, passing the configuration as an argument
var app = new Elementary(config);

// Elementary includes jQuery and Handlebars.js, so you can use them as you normally would by adding them to the global scope
window.$ = window.jQuery = app.jquery;
window.Handlebars = app.Handlebars;

// Add a route to your home page
app.addTemplate('home', './handlebars/home.hbs');
// Elementary uses Navigo.js as it's router. Calling route() with no arguments sets the home page. The 'home' template and/or the 'home' route handler will be used automatically along with the state taken from the url.
app.router.route();

app.addTemplate('link', './handlebars/link.hbs');

app.router.route('link');

// Finally, call "run()" and your are all set.
app.run();


// You might want to handle links automatically. Here's an example of how to do this.
$(document).on('click', '[href]', function(e){
	var l = $(e.target);			
	var routestring = l.attr('href');
	app.router.navigate(routestring);
	
	e.preventDefault();
});
