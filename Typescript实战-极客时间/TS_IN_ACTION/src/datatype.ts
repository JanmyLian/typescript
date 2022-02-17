// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = "abc"
// str = 123 // error

// 数组类型
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4'] // 联合类型

// 元组类型(特殊的数组，限定了数组类型和个数)
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2] // error即使添加了新元素，也不能越界访问

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
// let obj: object = { x: 1, y: 2 } // error这样当改变属性值时会报错
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// todo...symbol用途？
// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined, null
let un: undefined = undefined
let nu: null = null

//void
let noReturn = () => { }

// any(不建议使用)
let x
x = 1
x = []
x = () => { }

// never(永远不会有返回值的类型1.函数抛出异常，2.函数死循环)
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) { }
}

// 枚举（一组有名字的常量集合）
// 数字枚举
enum Role {
  Reporter = 1, // 后面的枚举成员会相应递增
  Developer,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role.Reporter)
// console.log(Role)
// console.log(Role[0])

// 字符串枚举(没有反向映射)
enum Message {
  Success = "成功了",
  Fail = "失败了"
}
// console.log(Message)
// console.log(Message.Success)
// console.log(Message[0]) // error没有反向映射

// 异构枚举（数字枚举+字符串枚举）（不建议）
enum Answer {
  N,
  Y = "Yes"
}
// console.log(Answer)

// 枚举成员
// Role.Reporter = 2 //error枚举成员定义后不能修改
enum Char {
  // 分两类，1.const常量成员
  a,
  b = Char.a,
  c = 1 + 3,
  // 2.computed需要被计算的枚举成员
  d = Math.random(),
  e = '123'.length
}

// 作业：用枚举类型改造if-else代码
// 改造前
function initByRole(role: number) {
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
}
// 改造后
enum RoleEnum {
  role1 = 1,
  role2,
  role3,
  role4,
  role5,
}
function initByRoleEnum(role: RoleEnum) {
  switch (role) {
    case RoleEnum.role1:
      // do sth
      break
    case RoleEnum.role2:
      // do sth
      break
    case RoleEnum.role3:
      // do sth
      break
    case RoleEnum.role4:
      // do sth
      break
    case RoleEnum.role5:
      // do sth
      break
    default:
      // do sth
  }
}



