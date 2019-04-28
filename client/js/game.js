var socket = io();

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 65: // A
      socket.emit('keyPress', {inputId:left, state:true});
        break;
    case 87: // W
        socket.emit('keyPress', {inputId:up, state:true});
        break;
    case 68: // D
      socket.emit('keyPress', {inputId:right, state:true});
      break;
    case 83: // S
      socket.emit('keyPress', {inputId:down, state:true});
    break;
 }

document.onkeyup = function(event) {
  switch (event.keyCode) {
    case 65: // A
      socket.emit('keyPress', {inputId:left, state:false});
        break;
    case 87: // W
        socket.emit('keyPress', {inputId:up, state:false});
        break;
    case 68: // D
      socket.emit('keyPress', {inputId:right, state:false});
      break;
    case 83: // S
      socket.emit('keyPress', {inputId:down, state:false});
    break;
 }

socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
socket.on('state', function(players) {
  context.clearRect(0, 0, 800, 600);
  context.fillStyle = 'green';
  for (var id in players) {
    var player = players[id];
    context.beginPath();
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
    context.fill();
  }
});

