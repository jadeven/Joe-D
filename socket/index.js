const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    fs.readFile(deps.messagesPath, 'utf8', function (err, msg){
      if (err) throw err;
      console.log('GET REQUEST')
      const messages = msg
      .split('\n')
      .filter(txt => txt) // will filter out empty string
      .map(JSON.parse)
    })
    io.emit('chat message', messages);
  });
});