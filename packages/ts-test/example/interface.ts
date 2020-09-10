interface Square {
  color: string,
  area: number,
  // readonly k: string // 只读属性
}

// 可选属性
interface SquareConfig {
  color?: string,
  width?: number
}

function caculator(config: SquareConfig): Square {
  let newConfig = { color: 'red', area: 100 }
  newConfig.color = newConfig.color || config.color
  if (config.width) {
    newConfig.area = config.width * config.width
  }
  return newConfig
}

let result = caculator({ width: 20 })
console.log(result)

let myArr: ReadonlyArray<string> = ['11', '22']
// myArr[1] = '11'
console.log(myArr)
