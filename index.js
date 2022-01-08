var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello world');
var i = 34;
var n = 23;
i = 10;
var z = i * n;
//Setting array of particular type with angle bracket
var arr = [23, 34, 10];
var Student = /** @class */ (function () {
    function Student(name) {
        this.studentName = name;
    }
    //methods
    Student.prototype.getName = function () {
        return this.studentName;
    };
    Student.prototype.computeGPA = function () {
        return 2.3;
    };
    return Student;
}());
var UndergradStudent = /** @class */ (function (_super) {
    __extends(UndergradStudent, _super);
    function UndergradStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndergradStudent.prototype.getRegistrationNumber = function () {
        return "ddfgfg";
    };
    return UndergradStudent;
}(Student));
var obj1 = new Student("John Wick");
console.log(obj1.computeGPA());
console.log(obj1.getName());
var obj2 = new UndergradStudent("Jennifer Lopez");
console.log(obj2.computeGPA());
console.log(obj2.getName());
console.log(obj2.getRegistrationNumber());
var students = [
    { id: 1, name: "Rose Benneth", age: 23 },
    { id: 2, name: "Jane Benneth", age: 23 },
    { id: 3, name: "Jennifer Benneth", age: 34 },
];
