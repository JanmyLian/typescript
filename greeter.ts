interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    // 数字类型
    let list: number[] = [1,2,3]
    console.log(list)
    // 元组
    let x: [number, string];
    x = [10, 'hello'];
    // 枚举类型
    enum Color { Red = 1, Green, Yellow }
    let c: Color = Color.Green
    console.log(c)
    
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("wendy", "M.", "user");

document.body.innerHTML = greeter(user);