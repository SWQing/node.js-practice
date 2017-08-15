/**
 * Created by su on 2017/8/11.
 */
var http = require('http');
http.get(process.argv[2], function (res) {
    res.on('data', function (data) {
        console.log(data);
    })
    res.setEncoding('utf8');
})