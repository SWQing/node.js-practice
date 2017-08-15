/**
 * Created by su on 2017/8/11.
 */
var fs = require('fs');
var arr;
fs.readFile('./rest.txt', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        arr = data.toString().split('\n');
        console.log(arr.length);
    }
})