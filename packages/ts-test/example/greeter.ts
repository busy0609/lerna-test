class User {
  firstName: string
  lastName: string
  fullName: string

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

// let user: Person = {
//   firstName: 'Li',
//   lastName: 'Hua'
// }
let user = new User('Li', 'Hua')

console.log(greeter(user))