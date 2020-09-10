/**
 * 高级类型
 */
// 1、交叉类型
function extend(first, second) {
    var result = {};
    for (var id_1 in first) {
        result[id_1] = first[id_1];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        //..
        console.log('test');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Miranda'), new ConsoleLogger());
console.log(jim.name);
jim.log();
