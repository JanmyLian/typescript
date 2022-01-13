var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    // 数字类型
    var list = [1, 2, 3];
    console.log(list);
    // 元组
    var x;
    x = [10, 'hello'];
    // 枚举类型
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Yellow"] = 3] = "Yellow";
    })(Color || (Color = {}));
    var c = Color.Green;
    console.log(c);
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("wendy", "M.", "user");
document.body.innerHTML = greeter(user);
// 变量作用域
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量(可以通过类名直接访问)
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
