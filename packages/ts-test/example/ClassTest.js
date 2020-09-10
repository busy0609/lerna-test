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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance + "m");
        // 静态属性
        // Animal.scale.x
    };
    Animal.greet = 'Hello';
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Shit...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var snake = new Snake('Hell');
var snake2 = new Snake('Kass');
snake.move();
snake2.move(15);
// snake.name
// 静态类型
var snake3 = Animal;
snake3.greet = 'ssss';
// console.log(snake3.name)
console.log(snake3.greet);
// 实例类型
var snake4 = new snake3();
snake4.move();
