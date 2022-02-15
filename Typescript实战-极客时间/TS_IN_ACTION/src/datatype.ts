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