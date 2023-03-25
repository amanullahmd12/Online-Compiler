const express = require ('express');
const app = express ();

const bodyParser = require ('body-parser');
app.use (bodyParser.json ());

var compiler = require ('compilex');
var options = {stats: true};
compiler.init (options);

app.use (
  '/codemirror-5.65.12',
  express.static (
    '/Users/mdamanullah/Desktop/Online Code Compiler/codemirror-5.65.12'
  )
);

app.get ('/', function (req, res) {
  res.sendFile ('/Users/mdamanullah/Desktop/Online Code Compiler/index.html');
});

app.post ('/compile', function (req, res) {
  var code = req.body.code;
  var input = req.body.input;
  var lang = req.body.lang;

  var envData = {OS: 'macOS'};
  compiler.compilePython (envData, code, function (data) {
    res.send (data);
  });
});
app.listen (8000);
