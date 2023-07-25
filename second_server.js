var http = require('http');
var imp = require('./Second_module');
http.createServer(function (req,res){
    //res.writeHead(200,{'Content-Type':'text/html'});
   // res.write(imp.myDate());
   const msg = imp.hw();
   console.log(msg);
   res.write(msg);
   res.end();
}).listen(3001);