/**
 * Created by su on 2017/8/12.
 */
var bl = require('bl');
var http = require('http');
http.get(process.argv[2], function (res) {
    var length, str;
    res.pipe(bl(function (err, data) {
        length = data.toString().length;
        str = data.toString();
        console.log(length);
        console.log(str);
    }))
})