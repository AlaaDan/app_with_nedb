const nedb = require('nedb-promises')
const database = new nedb({filename: 'database.db', autoload: true});

// insert()
// update()
// find()
// remove()

//database.insert({firstname: "Rafah",lastname: "Aldandachi", age: 45 })

async function getPerson(){
    const person = await database.find({lastname: 'Svensson'});
    console.log(person)

}

async function getFirstName(fName){
    const firstName = await database.find({firstname: fName})
    console.log(`First name is ${firstName[0].firstname}`)
}
async function getAge(age){
    const ageMatch = await database.find({age: {$gt: age}})
    console.log(ageMatch)
}
async function changefNameAge(originalName, age, changeto){
    const getData = await database.update({firstname: originalName}, {$set: {firstname: changeto, age: age }})
    console.log(database)
}

async function deletePerson(name){
    const nameToDelete = await database.remove({firstname: name})
    console.log(`New database ${database}`)
}
deletePerson("Test")
changefNameAge("Alaa", 44, "Test")
getAge(30)
getFirstName('Rafah')
getPerson()
