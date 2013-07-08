var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var content;
    fs.readFileSync('index.html','base64', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });
   

  response.send(content+'fklklklklk');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
