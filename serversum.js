//Modules
// 1.correct
// 2.local
// 3.Third Party

var http = require('http');

var a=5;
var b=5;
var c=a+b;
var msg = "Sum is "+c;
if(c==10)
{
    msg += "<br/> C is 10"
}
else{
    msg += "c is not 30"
}

http.createServer(function(req, res){
res.writeHead(200,{'Content-type':'text/html'});
res.end(msg);
}).listen(3000);

console.log("Server is listening on http://127.0.0.1:3000")