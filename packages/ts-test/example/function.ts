// 可选参数: ? 或使用默认值
// 剩余参数: ...
function buildName(firstName = 'Sam', ...rest: string[]): string {
  let restName = ''
  for (let item of rest) {
    restName += item + ' '
  }
  return firstName + ' ' + restName
}

console.log(buildName(undefined, 'Bob', 'Sir'))

// 箭头函数能使用this 否则this指向global

// 泛型
function identity<T>(arg: T): T {
  return arg
}

interface GenerateIdentifyFn<T> {
  (arg: T): T
}

let myIdentify: GenerateIdentifyFn<number> = identity

// 泛型约束
interface Lengthwise {
  length: number
}

function logIdentify<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

logIdentify({ length: 3 })

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 3, f: 4 }

getProperty(x, 'a')
// getProperty(x, 'k')

class LionKepper {
  nametag: number
}

class Animals {
  numLegs: number
}

class Lion extends Animals {
  keeper: LionKepper
}

function createInstance<T extends Animals>(c: new () => T): T {
  return new c()
}

createInstance(Lion).keeper.nametag