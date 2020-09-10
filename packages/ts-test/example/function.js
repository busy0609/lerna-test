var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 可选参数: ? 或使用默认值
// 剩余参数: ...
function buildName(firstName) {
    if (firstName === void 0) { firstName = 'Sam'; }
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var restName = '';
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var item = rest_1[_a];
        restName += item + ' ';
    }
    return firstName + ' ' + restName;
}
console.log(buildName(undefined, 'Bob', 'Sir'));
// 箭头函数能使用this 否则this指向global
// 泛型
function identity(arg) {
    return arg;
}
var myIdentify = identity;
function logIdentify(arg) {
    console.log(arg.length);
    return arg;
}
logIdentify({ length: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 3, f: 4 };
getProperty(x, 'a');
// getProperty(x, 'k')
var LionKepper = /** @class */ (function () {
    function LionKepper() {
    }
    return LionKepper;
}());
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animals));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper;
