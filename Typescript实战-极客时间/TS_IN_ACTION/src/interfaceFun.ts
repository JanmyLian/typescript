// 函数类型接口-用接口定义函数
// let add: (x: number, y:number) => number // 可以用变量来定义函数类型
// 此外也可以用接口定义函数类型
// interface Add {
//   (x:number, y:number): number
// }
// 此外也可以用类型别名
type Add = (x: number, y: number) => number
let add: Add = (a, b) => a + b
// 用混合接口定义类库
