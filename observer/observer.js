// 设置观察者实现类
var ConcreateObserver = /** @class */ (function () {
    function ConcreateObserver(name) {
        this.name = name;
    }
    ConcreateObserver.prototype.notify = function () {
        console.log("".concat(this.name, " has been notified"));
    };
    return ConcreateObserver;
}());
// 设置运用观察者（观察者功能）
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.add = function (observer) {
        console.log("".concat(observer, " is pushed"));
        this.observers.push(observer);
    };
    Subject.prototype["delete"] = function (observer) {
        console.log("".concat(observer, " is deleted"));
        var ind = this.observers.indexOf(observer);
        ind != -1 && this.observers.splice(ind, 1);
    };
    Subject.prototype.notify = function () {
        console.log("notify all the observers", this.observers);
        this.observers.forEach(function (observer) { return observer.notify(); });
    };
    return Subject;
}());
var subject = new Subject();
var wendy = new ConcreateObserver("wendy");
var janmy = new ConcreateObserver("janmy");
subject.add(wendy);
subject.add(janmy);
subject.notify();
subject["delete"](janmy);
subject.notify();
