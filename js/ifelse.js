// if(condition){

// }else {

// }
// `` - Backtick
let a = 15;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
 }else {
    console.log(`Number ${a} is odd`)
 }
//Number 15 is odd

// let uname = "Ami"
// if(uname == "John"){
//     console.log(`Hi ${uname} you are admin`);
// } else if(uname == "Jack"){
//     console.log(`Hi ${uname} you are super admin`)
// }
// else{
//     console.log(`Hi ${uname} you are unknown`)
// }

let uname = "jack"
let role = "Admin1"
if(role == "Admin"){
    if(uname == "John"){
        console.log(`Hi ${uname} you are admin`);
    } else{
        console.log(`Hi ${uname} you are unknown`)
    }
}else{
    if(uname == "Jack"){
        console.log(`Hi ${uname} you are super admin`)
    }
    else{
        console.log(`Hi ${uname} you are unknown`)
    }

}

//ternary operator - single line if else
// condition ? if condition is true : if condition is false 

var b  = 10
b > 10 ? "Hii" : "Hello"
//"Hello"

var b = 10

b == 10 ? "Hii" : "Hello"
//10 == 10  true
//"Hii"

var b = 10
b > 10 ? b + 1 : b - 1
//10 > 10-- 10 - 1 = 9
// 9

var b  = 10 
b == 10 ? b +1 : b -1
//11