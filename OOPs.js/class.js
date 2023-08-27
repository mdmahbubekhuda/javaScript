// class - constructor & method
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.score = 0
    }
    login() {
        console.log(this.email, 'Just logged in')
        return this
    }
    logout() {
        console.log(this.email, 'Just logged out')
        return this
    }
    updateScore() {
        this.score++
        console.log(this.score);
        return this
    }
}
/* 'new' keyword 
 * 1. creates a new empty object; 
 * 2. sets the value of 'this' to be the new empty object; (and pass to class object)
 * 3. calls the constructor method;
*/
const userOne = new User('Rnk', 'rnk@gmial.com')
const userTwo = new User('Ronok', 'ronok@gmial.com')

// method chaining - 'return this' for each method (to get rid of undefined)
userOne.login().updateScore().updateScore().logout()

// class inheritance - if constructor function is omitted then properties are inherited from parent class (extended User)
class Admin extends User {
    constructor(name, email, badge) {
        super(name, email) // inherits properties from parent class
        this.badge = badge
    }
    deleteUser(user) {
        users = users.filter((u => u.email != user.email))
    }
}
const admin = new Admin('Mahbub', 'mahbub@gmail.com', 'ADMIN-Badge')
let users = [userOne, userTwo, admin]
admin.deleteUser(userTwo)
console.log(users);