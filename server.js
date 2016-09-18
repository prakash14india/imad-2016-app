var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
    a1: {
        title: "Article One - Prakash",
        heading: "Article One",
        date: "Sep 18, 2016",
        content: `
            <p>My Sample content appear here, My Sample content appear here, My Sample content appear here, My Sample content appear here.</p>
            <p>My Sample content appear here, My Sample content appear here, My Sample content appear here, My Sample content appear here.</p>
            <p>My Sample content appear here, My Sample content appear here, My Sample content appear here, My Sample content appear here.</p>
            <p>My Sample content appear here, My Sample content appear here, My Sample content appear here, My Sample content appear here.</p>`
    },
    a2: {
        title: "Article Two - Prakash",
        heading: "Article Two",
        date: "Sep 17, 2016",
        content: "<p>My Sample content appear here two article</p>"
    },
    a3: {
        title: "Article Three - Prakash",
        heading: "Article Three",
        date: "Sep 15, 2016",
        content: "<p>My Sample content appear here third article</p>"
    }
};

function createTemplate(data) {
    var htmlTemplate = `
        <html>
            <head>
                <title>${data.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                        <a href="/a1">Article One</a>
                        <a href="/a2">Article Two</a>
                        <a href="/a3">Article Three</a>
                    </div>
                    <hr/>
                    <h3>${data.heading}</h3>
                    <div>
                        ${data.date}
                    </div>
                    <div>
                        ${data.content}
                    </div>
                </div>
            </body>
        </html>    
    `
    return htmlTemplate;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
  res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
