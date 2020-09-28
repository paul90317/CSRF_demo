var http = require("http",function(req,res){}).createServer();
http.listen(7777,function(){
	console.log("server listen to http port 7777...")
});
var yourname = '';
var io = require("socket.io")(http)
io.on("connection",function(socket){
	socket.on("login",function(name){
		console.log(name+" login ...");
		yourname = name;
	})
	socket.on("transfer",function(towho,money){
		if(yourname=="paul90317")console.log(yourname+" transfer "+money+" to "+towho);
		else console.log("transfer fail!");
	})
})
