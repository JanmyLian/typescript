// 对象类型接口（用接口定义对象）
interface list {
  readonly id: number;
  name: string;
  // [x: string]: any; // 用任意字符串去索引list，可以得到任意结果，这样list支持多个属性
  age?: number;
}
interface Result {
  data: list[]
}
function render(result: Result){
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if(value.age){
      console.log(value.age)
    }
    // value.id++ // error readonly
  })
}
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
}
render(result)
// 如果直接传入对象字面量，ts会对额外的字段进行类型检查，
// 两种方法避免，1.赋值给对象 ?2.类型断言 3.使用字符串索引签名[x: string]: any
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'}
//   ]
// }) // error 
// ???
// render(<Result>{
//   data: [
//     {id: 1, name: 'A', sex: 'male'}
//   ]
// }) 
// ???
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'}
//   ]
// } as Result)

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names{
  [x:string]: any;
  // y:number // error
  [y: number]: number
}