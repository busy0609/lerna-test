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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super.call(this, 'Alice') || this;
    }
    Employee.prototype.printMeeting = function () {
        console.log(_super.prototype.name + " test");
    };
    Employee.prototype.agnetMetting = function () {
        console.log('agent');
    };
    return Employee;
}(Department));
var dep;
dep = new Employee();
dep.printMeeting();
