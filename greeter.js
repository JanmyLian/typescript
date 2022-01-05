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
