// String = "Aaa" 'hii' "Test" "4321" "6826328kdfdsfn" `hkdfndsfn` 'true'
// Number = 7837 4594754557 787.3845 .547875
// Boolean = true -1 false - 0


var a = "Hii"
var b = 10
var c = true

typeof(a) //string
typeof(b) //number
typeof(c) //boolean

var d = "20"
typeof(d) //string
var e = 10.23
typeof(e) // number
// var f = $
// console.log(typeof(f)) // 
// var f = #
// console.log(typeof(f))
// var f = @
// console.log(typeof(f))
var f = '$10'
console.log(typeof(f))//string
var g = 'true'
console.log(typeof(g))//string
var h = `test`
console.log(typeof(h))//string

var a = 10
var b =  20
a + b 
10 + 20 
// => 30
a - b // -10
a*b // 200
a/b // 0.5
b%a // 20/10 

5%2 // 1
5%3 // 2
5%4 // 1
5%5 // 0

2%4 // 2
3%4 // 3
1%4 // 1

var a = "Hiiiii"
var b = "JavaScript"
 a + b // (concat)
 'HiiiiiJavaScript'
 var c = a-b
 console.log(c)//NaN - Not a Number
 var c = a*b //NaN
 console.log(c)
 var c = a/b //NaN
 console.log(c)

//  a + b  == "Hii10"
//  a - b = NaN

// string+string = string
// string+number = string
// number+string = string
// number+number = number

// 1+1 =1
// 0+1 =1
// 1+0 =1
// 0+0 = 0

"10"+20+30
"1020"+30
"102030"

10+"20"+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

"10"+20+30-1
"1020"+30-1
"1020"+29
"102029"

var a = 10+20+"30"-1
console.log(a)

var a = 10
var b="20"
c = a+(+b)
console.log(c);

var a  = "10a"-1 
console.log(a);

"10"-1 //9
10-"1" // 9
10-"1a" //NaN
"20"*"5" // 100
"20a"*"5"// NaN
