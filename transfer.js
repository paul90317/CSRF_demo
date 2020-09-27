var socket=require('socket.io-client')("http://127.0.0.1:7777")
var args=location.href.split("?")[1].split("&");
var towho=args[0];
var money=args[1];
socket.emit("transfer",towho,money);
