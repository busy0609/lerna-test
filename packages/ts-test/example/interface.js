function caculator(config) {
    var newConfig = { color: 'red', area: 100 };
    newConfig.color = newConfig.color || config.color;
    if (config.width) {
        newConfig.area = config.width * config.width;
    }
    return newConfig;
}
var result = caculator({ width: 20 });
console.log(result);
var myArr = ['11', '22'];
// myArr[1] = '11'
console.log(myArr);
