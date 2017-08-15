/**
 * Created by su on 2017/8/14.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    var obj = url.parse(req.url);
    var param = querystring.parse(obj.query);
    if('/api/parsetime' == obj.pathname) {
        var date = new Date(param.iso);
        var json = JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        })
        res.end(json);
    }

    if('/api/unixtime' == obj.pathname) {
        var date = new Date(param.iso);
        var json = JSON.stringify({
            "unixtime": date.getTime()
        })
        res.end(json);
    }

}).listen(process.argv[2]);
