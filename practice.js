const ankit = {
    firstName: 'Ankit',
    lastName: "kumar",
    job : 'searching for job',
    friends: ['Michael', 'Peter', 'steven'],
    birthyear: 1993,
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear
    // }

    // ==== THIS KEYWORD 
    // calcAge: function() {
    //     return 2023 - this.birthyear
    // }

    calcAge: function() {
        this.age = 2023 - this.birthyear
        return this.age
    },

    getSummary: function() {
        const str = `${this.firstName} is a ${this.age} years old guy,and he has ${this.hasDriversLicense ? 'a' : 'not a'} drivers license`
        return str
    }
}

console.log(ankit['calcAge'](), ankit);
console.log(ankit['getSummary']())

// const intrestedIn = prompt(`What do you want to know about Ankit? Choose between
// firstName, lastname, age, job, friends`);

// if(ankit[intrestedIn] === ankit.friends) {
//     console.log(`${ankit['firstName']} has ${ankit.friends.length} friends, and 
//     his best friend is ${ankit.friends[0]}`)
// } else {
//     console.log(`Wrong request!`)
// }

