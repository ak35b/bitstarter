var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var content;
    fs.readFileSync('/index.html','utf8', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
