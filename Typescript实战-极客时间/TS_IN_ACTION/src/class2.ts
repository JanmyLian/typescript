/**
 * 类2：抽象类与多态
 */
// 抽象类，就是只能被继承，不能被实例化
abstract class Animal {
  eat(){
    console.log('eat')
  }
  abstract sleep(): void // 抽象类中的抽象方法，也可以不具体实现
}
// let animal = new Animal() // error因为抽象类无法被实例化
class Dog2 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  sleep(): void { // 复用抽象父类的抽象方法，可以抽离出公用的东西
      console.log('dog sleep')
  }
}
let dog2 = new Dog2('wangwang')
dog2.eat()

class Cat extends Animal{
  sleep(): void {
      console.log('cat sleep')
  }
}

// todo...多态，this类型？