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
city.at(-5)("u");
city.charAt(-1)("");

var a = "John";
var b = "john";
a == b;
false;
a.toLocaleLowerCase() == b.toLocaleLowerCase();
// "john"  ==  "john"
true;

//slice(start, end)

var city = "mumbai";
// m   u   m    b    a    i
// 0   1    2    3    4    5

// m   u   m    b    a    i
//-6  -5  -4  -3    -2  -1

city.slice(1)("umbai");
console.log(city.slice(2))("mbai");
city.slice(2, 5);
("mba");
city.slice(0, -1);
("mumba");
city.slice(0, -2);
("mumb");
city.slice(-2, 2);
("");
city.slice(-2, -1);
("a");
city.slice(-1, -2);
("");
city.slice(-2, 3);
("");
city.slice(-2, 1);
("");

var firstname = "Sangeetha";

// S  a   n    g   e   e    t    h    a
// 0  1   2    3   4   5    6    7    8
//-9 -8  -7   -6   -5  -4  -3   -2    -1
firstname.slice(3); // geetha

firstname.slice(7); // ha

firstname.slice(2, 8); //ngeeth

firstname.slice(-7, -1); //ngeeth

var city = "amsTerdam";
//a m s T e r d a m
//0 1 2 3 4 5 6 7 8
city.charAt(0).toUpperCase(); //A
city.charAt(3).toUpperCase(); // T
city.slice(1).toLowerCase(); // msterdam
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(); // Amsterdam

var city = "paRIs";
//p    a    R    I     s
//0    1    2    3     4
console.log(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()); // Paris

var uname = "  paRis.  ";
//It calculates space as well
console.log(uname.length); // 10
console.log(uname);

console.log(uname.trim()); //It removes white spaces and return the string

var a = "I am learning JavaScript";
console.log(a.replace("JavaScript", "JS"));
//I am learning JS
var a = "JavaScript I am learning JavaScript";
console.log(a.replace("JavaScript", "JS"));
//JS I am learning JavaScript

var a = "JavaScript I am learning JavaScript";
console.log(a.replace(/JavaScript/g, "JS")); //replace all -g -  global modifier
//JS I am learning JS

var uname = "  mumbai  .  ";
console.log(uname);
console.log(uname.replaceAll(" ", "")); //mumbai.
console.log(uname.replaceAll(/ /g, ""));

var a = "https://github.com?/SangeethaShanmugm?/FSD-Batch1";

console.log(a.split("/"));
//(5) ['https:', '', 'github.com', 'SangeethaShanmugm', 'FSD-Batch1']
console.log(a.split("."));
//(2) ['https://github', 'com/SangeethaShanmugm/FSD-Batch1']

console.log(a.split("?"));
//['https://github.com', '/SangeethaShanmugm', '/FSD-Batch1']
//     0                        1                   2

var out = a.split("?")[2];
console.log(out);
//   /FSD-Batch1

var a = "Javascript";
console.log(a.split(""));
//  (10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

var b = ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
console.log(b.toString());
// J,a,v,a,s,c,r,i,p,t

console.log(b.toString().replaceAll(",", ""));
//Javascript
