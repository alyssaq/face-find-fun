var express = require('express'),
    fs      = require('fs');

var app = express();

app.use("/lib", express.static(__dirname + '/lib'));

// Routes
app.get('/', function(req, res){
  res.send(getHtmlFile("index"));
});

app.get('/:view', function(req, res) {
  res.send(getHtmlFile( req.params.view ));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function getHtmlFile(fileName) {
  var data;
  try {
    data = fs.readFileSync(fileName + '.html').toString();
  } catch (e) {
    data = "<h1> Opps! " + fileName + " does not exist! </h1>"
  }
  return data;
}