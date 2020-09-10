/**
 * 高级类型
 */

// 1、交叉类型
function extend<T, U>(first: T, second: U) {
  let result = {} as T & U

  for (let id in first) {
    result[id] = first[id] as any
  }

  for (var id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }

  return result
}

class Person {
  constructor(public name: string) {

  }
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {
    //..
    console.log('test')
  }
}

var jim = extend(new Person('Miranda'), new ConsoleLogger())
console.log(jim.name)
jim.log()

//联合类型
interface Bird {
  fly()
  layEggs()
}


interface Fish {
  swim()
  layEggs()
}


function getSamllPets(): Fish | Bird {
  // ..
  return
}

let pet = getSamllPets()
pet.layEggs()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

// 类型保护
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

// 基础类型保护机制 typeof
function paddingLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expented string or number, got ${padding}`)
}

// instanceof  -- class