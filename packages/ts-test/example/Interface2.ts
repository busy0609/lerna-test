interface Shape {
  area: number
}

interface Triangle extends Shape {
  width: number
}

interface RightTriangle extends Triangle, Shape {
  angle: number
}

let data = {} as RightTriangle
data.area = 9
data.width = 3
data.angle = 30.0

