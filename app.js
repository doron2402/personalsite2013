
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	exphbs = require('express3-handlebars'),
	http = require('http'),
	path = require('path');

var app = express();



// all environments
/* Setting Port */ 
app.set('port', process.env.PORT || 3000);


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* Global configuration */
app.locals({
    site: {
        title: 'LaSafot',
        description: 'Teach or Learn any language from locals',
        name: 'LaSafot - real way learning new language'
    },
    author: {
        name: 'Doron Segal',
        contact: 'doron2402@gmail.com',
        site: 'http://wwww.segaldoron.com'
    }
});


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



app.get('/', routes.index);
app.post('/contact', routes.contactForm);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
