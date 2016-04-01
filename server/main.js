var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

var cppClient, webClient;

function setupCppClient(socket) {

  cppClient = socket;

  socket.on('message', function(msg){
    var m = "Message from cpp: "+msg;

    console.log(m)

    if (webClient) webClient.emit('message', m);
  });

}

function setupWebClient(socket) {

  webClient = socket;

  socket.on('message', function(msg){
    var m = "Message from web: "+msg;
    console.log(m)
    if (cppClient) cppClient.emit('message', m);
  });

  console.log("web connected")
}

io.on('connection', function(socket){

  if(socket.handshake.query.client=="web")
    setupWebClient(socket)

  else if(socket.handshake.query.client=="cpp")
    setupCppClient(socket)

  else
    console.log('a user connected, but it was not recognized');

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
