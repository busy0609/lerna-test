var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
// let user: Person = {
//   firstName: 'Li',
//   lastName: 'Hua'
// }
var user = new User('Li', 'Hua');
console.log(greeter(user));
