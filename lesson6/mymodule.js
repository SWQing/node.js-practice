/**
 * Created by su on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');
module.exports = function (name1, name2, callback) {
    fs.readdir(name1, function (err, list) {
        for(var i = 0; i < list.length; i++) {
            if (err) return callback(err);
            if(path.extname(list[i]) == '.' + name2) {
                console.log(list[i]);
            }
        }
    })
}