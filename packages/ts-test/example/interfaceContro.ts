//实例接口
interface ClockInterface {
  tick()
}

//构造器接口
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

function createClock(ctro: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctro(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }

  tick() {
    console.log('Beep Beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }

  tick() {
    console.log('Tiki Tiki')
  }
}

let digital = createClock(DigitalClock, 12, 3)
digital.tick()
let analog = createClock(AnalogClock, 24, 34)
analog.tick()