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

// 变量作用域
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量(可以通过类名直接访问)
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)