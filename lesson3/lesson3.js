/**
 * Created by su on 2017/8/11.
 */
var fs = require('fs');//引入模块
// console.log(fs.readFileSync('./rest.txt').toString().split('\n').length);
var buf = fs.readFileSync('./rest.txt');//生成buffer对象
var arr = buf.toString().split('\n');//转换成字符串, 然后通过\n划分为数组
console.log(arr.length);//输出长度