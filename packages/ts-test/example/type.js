var v1 = 'aa';
var v2 = false;
var v3 = 0x14;
var v4 = [1, 2, 3];
var v5 = [1, 2, 4];
// 元组
var v6;
v6 = ['aa', 11];
console.log(v6[0]);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
var v7 = Color.Orange;
var v8 = Color[2];
console.log(v7, v8);
var v9 = 9;
v9 = 'tet';
v9 = false;
// void
function test() {
    console.log('void');
}
//never
function error(msg) {
    throw new Error(msg);
}
// 报错
// create({ prop: 1 })
// create(null)
// 类型推断
var v10 = 'This is a test case';
console.log(v10.length);
console.log(v10.length);
