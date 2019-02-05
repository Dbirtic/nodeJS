var express = require('express');
var path = require('path');

// init app
var app = express();

// load view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res){
    var articles = [{
        id:1,
        title:'Article One',
        author: 'Dominik Birtic',
        body: 'This is artikl von'
    },
    {
        id:2,
        title:'Article Two',
        author: 'Max Payne',
        body: 'This is artikl tu'
    },
    {
        id:3,
        title:'Article Three',
        author: 'Dominik Birtic',
        body: 'This is artikl thri'
    }
    ];
    res.render('index', {
        title:'Artikli',
        articles: articles
    });
});

// add route
app.get('/articles/add', function(req, res){
    res.render('add_article',{
        title:'Add Article'
    })
});

// start server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});