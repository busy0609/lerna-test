class Animal {
  private name: string
  static scale: { x: number, y: number }
  static greet = 'Hello'

  constructor(name?: string) {
    this.name = name
  }

  move(distance: number = 0) {
    console.log(`${this.name} move ${distance}m`)
    // 静态属性
    // Animal.scale.x
  }
}

class Snake extends Animal {
  constructor(name?: string) {
    super(name)
  }

  move(distance: number = 5) {
    console.log('Shit...')
    super.move(distance)
  }
}

let snake = new Snake('Hell')
let snake2: Animal = new Snake('Kass')
snake.move()
snake2.move(15)
// snake.name

// 静态类型
let snake3: typeof Animal = Animal
snake3.greet = 'ssss'
// console.log(snake3.name)
console.log(snake3.greet)

// 实例类型
let snake4: Animal = new snake3()
snake4.move()
