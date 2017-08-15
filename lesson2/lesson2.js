/**
 * Created by su on 2017/8/11.
 */
var sum = 0;
for(var i = 2; i < process.argv.length; i++) {
    sum += +process.argv[i];
}
console.log(sum);