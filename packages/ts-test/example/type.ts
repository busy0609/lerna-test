let v1: string = 'aa'

let v2: boolean = false

let v3: number = 0x14

let v4: number[] = [1, 2, 3]
let v5: Array<number> = [1, 2, 4]

// 元组
let v6: [string, number]
v6 = ['aa', 11]
console.log(v6[0])

// 枚举
enum Color {
  Red,
  Green,
  Orange
}
let v7: Color = Color.Orange
let v8: string = Color[2]
console.log(v7, v8)

let v9: any = 9
v9 = 'tet'
v9 = false

// void
function test(): void {
  console.log('void')
}

//never
function error(msg): never {
  throw new Error(msg)
}

// object
declare function create(o: object | null): void

// 报错
// create({ prop: 1 })
// create(null)

// 类型推断
let v10: any = 'This is a test case'
console.log((<string>v10).length)
console.log((v10 as string).length)