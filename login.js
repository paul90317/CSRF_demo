var socket=require('socket.io-client')("http://127.0.0.1:7777")
var name=document.location.href.split("?")[1];
socket.emit("login",name);
