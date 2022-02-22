/**
 * 类1：继承和成员修饰符
 */
// 类，实例化类，子类
// 修饰符private public protected readonly static，类成员和类的构造函数参数都可以添加修饰符
// * 继承父类的字类的构造函数中需要加super调用
class Dog {
  // private constructor(name: string){ // 这个类不能被实例化，也不能被继承
  //   this.name = name
  // }
  // protected constructor(name: string){ // 这个类不能被实例化，而只能被继承，相当于声明一个基类
  //   this.name = name 
  // }
  constructor(name: string){
    this.name = name // 与es不同，类属性被实例化，必须具有初始值或者?:可选值
  }
  name: string // 类成员的属性都是实例属性，而不是原型属性
  run(){} // 类成员的方法都是实例（原型）方法？口误？
  private pri(){} // 类中访问
  protected pro(){} // 类和字类访问
  readonly legs: number = 4 // 不可更改，一定要被初始化，跟实例属性一样
  static food: string = 'bones'
}
console.log(Dog.prototype) // 类方法只在原型上
let dog = new Dog('xiaoming')
console.log(dog) // 类属性只在实例上
// Dog.run() // error
// dog.run()
// Dog.name
// dog.name
// dog.pri() // error
console.log(Dog.food)
class Husky extends Dog { // 派生类
  constructor(name: string, public color: string){// 将参数自动变成实例的属性，这样我们就不需要在类中定义了
    super(name)//代表父类的实例
    this.color = color
    // this.pri() // error
    this.pro()
  }
  // color: string
}
console.log(Husky.food)