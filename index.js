const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});