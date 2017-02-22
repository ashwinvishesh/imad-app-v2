var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/articleone', function (req, res) {
  res.send(createTemplate(articleone));
});

app.get('/articletwo', function (req, res) {
  res.send('Hello World2');
});

var articleone = {
    title : 'Article One';
    heading : 'Article Heading';
    contents : `
        <p> This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article o
        </p>
        
        <p> This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article o
        </p>
        
        <p> This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article one .this is article one this must be artice one .This is article o
        </p>`;
}

function createTemplate(data)
{
        var title =data.title;
        var heading =data.heading;
        var contents = data.contents;
        var htmltemplate =`
            <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>

                <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <H2> ${heading} </H2>
                ${contents}
                </div>
            </body>
        </html>  
        `;
    return htmltemplate;
}



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
