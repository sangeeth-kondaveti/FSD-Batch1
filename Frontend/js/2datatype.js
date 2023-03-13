// Boolean = true -1 false - 0

true+true // 2
true+false // 1
false+false // 0

// true is equal to 1
// false is equal to 0 

10+true // 11
1/false // Infinity

var a = "Hii"+true
console.log(a)

"true"+"true"//truetrue

"true" -"true" //NaN

var a = "10"
var b = "20"
c=a+b //"1020"
var c = parseInt(a)+parseInt(b)
var c = (+a)+(+b)
// 10+20 -> 30
console.log(c)

var a = "10.34"
var b = "20.11"
parseInt(a)+parseInt(b)
// 10         + 20 -> 30
parseFloat(a) + parseFloat(b)
c = 10.34 + 20.11
console.log(c)

var a ="hi"
parseInt(a)
//NaN

var a = "10.345"
var b  = "20.111"
var c = Number(a) + Number(b)
30.34
console.log(c)

var a = "10"
var b ="20"
var c = Number(a)+Number(b)
console.log(c)

var a = "123Coimbatore"
var b = "Coimbatore123"
var c = "123Coimbatore567"

parseInt(a) // a = 123
parseInt(b) // b = NaN
parseInt(c) // c = 123

Number(a) // NaN
Number(b) // NaN
Number(c) // NaN