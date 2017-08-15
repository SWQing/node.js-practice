/**
 * Created by su on 2017/8/12.
 */
var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var data = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
    console.log(data);
    socket.write(data);
    socket.end(data);
})
server.listen(process.argv[2], function () {
    console.log('run');
});