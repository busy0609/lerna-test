abstract class Department {
  protected name: string

  // ?可选属性
  constructor(name?: string) {
    this.name = name
  }

  abstract printMeeting(): void
}

class Employee extends Department {
  constructor() {
    super('Alice')
  }

  printMeeting(): void {
    console.log(`${this.name} test`)
  }

  agnetMetting(): void {
    console.log('agent')
  }
}

let dep: Department
dep = new Employee()
dep.printMeeting()
// dep.agnetMetting() //报错
