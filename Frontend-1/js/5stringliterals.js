var mname = "Harry potter"
var type = "Magic"
var ind = "Hollywood"
var rating = 8
//An Harry Potter is an Magic movie with rating of 8 and from Holywood

//ES5
var result  = "An "+mname+" is an "+type+" movie with rating of "+rating+" and from "+ind+"."
console.log(result)

//ES6
const result1 = `An ${mname} is an ${type} movie with rating of ${rating} and from ${ind}.`
console.log(result)
