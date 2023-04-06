// create a object that store the person detail
let personDetail = {
    firstName : "pw",
    lastName : "Skill",
    ageInDays : 4000,
}

// function take the person detail in object
function takePersonDetail(object, callback){
    // return a callback that return person's full Name and age
    return callback(object)
}

function showDetail(object){
    // return person's fullName
    return `The person's full name is ${object.firstName} ${object.lastName}, and their age in days is ${object.ageInDays} `
}

let fullName = takePersonDetail(personDetail, showDetail)
console.log(fullName);
