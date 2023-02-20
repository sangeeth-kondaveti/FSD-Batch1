var uname = "john";

uname.toUpperCase();
("JOHN");
uname.toLowerCase()("john");

var city = "mumbai";

city.length;
6;
uname.length;
4;

var city = "mumbai";
// m   u   m    b    a    i
// 0   1    2    3    4    5

city[0]("m");
city[3]("b");

city.charAt(0)("m");
city.charAt(5)("i");

city.at(0)("m");
// m   u   m    b    a    i
//-6  -5  -4  -3    -2  -1
city.at(-1);
("i");
city.charAt(-1)("");

var a = "John";
var b = "john";
a == b 
false
a.toLocaleLowerCase() == b.toLocaleLowerCase()
// "john"  ==  "john"
true


//slice(start, end)


var city  = "mumbai"

// m   u   m    b    a    i
// 0   1    2    3    4    5

// m   u   m    b    a    i
//-6  -5  -4  -3    -2  -1

city.slice(1)
("umbai")
console.log(city.slice(2))
("mbai")

city.slice(2, 5)
"mba"
city.slice(0, -1)
"mumba"
city.slice(0, -2)
"mumb"
city.slice(-2, 2)
""
city.slice(-2, -1)
"a"
city.slice(-1, -2)
""
city.slice(-2, 3)
""
city.slice(-2, 1)
""


var city = "amsTerdam"
//a m s T e r d a m
//0 1 2 3 4 5 6 7 8
city.charAt(0).toUpperCase() //A
city.charAt(3).toUpperCase() // T
city.slice(1).toLowerCase() // msterdam
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() // Amsterdam