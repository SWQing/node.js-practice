/**
 * Created by su on 2017/8/12.
 */
var http = require('http');
var bl = require('bl');
var param = process.argv[2];
var arr = [];
for(var i = 2; i < 5; i++) {
    http.get(process.argv[i], function (res) {
        res.pipe(bl(function (err, data) {
            if(err){
                return console.error(err);
            }
            arr[i - 2] = data.toString();
            console.log(arr[i - 2]);
        }))
    })
}
