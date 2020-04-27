/*
//1

let str = "Hello";
console.log(typeof str);
let num = 123;
console.log(typeof num);
let flag = true;
console.log(typeof flag);
let txt = "true";
console.log(typeof txt);
 */

/*
//2

let a1 = 5+3;
let a2 = 5-3;
let a3 = 5*3;
let a4 = 5/3;
console.log(a1 + " " + a2 + " " + a3 + " " + a4);

//3

let a6 = 5%3;
let a7 = 3%5;
let a8 = 5+"3";
let a9 = "5"-3;
let a10 = 75 + "кг";
console.log(a6 + " " + a7 + " " + a8 + " " + a9 + " " + a10);
*/

/*
//4

function square(height, width){
    let s = height * width;
    return(console.log(s + "cм"));
}

square(23, 10);
*/

/*
//5

function cylinderVolume(heightC, dC) {
    const PI = 3.14;
    let v = PI * (dC/2)**2 * heightC;// V=πr^2h
    return(console.log(v + "м"));
}

cylinderVolume(10, 4);
 */

/*
//6

function hypotenuse(n, m){
    let k = n**2 + m**2;
    return console.log(k**2);
}

hypotenuse(3, 4);
 */

/*
//2

let m = 50;
let n = '';
if(m > 50){
    n = 'большое';
}else{
    n = 'маленькое';
}
console.log(n);
 */

/*
//3

let i = 2;
while(i < 9){
    console.log(i++);//7 раз
}
*/

/*
//4

let i = 45;
while(i <= 67){
    console.log(i++);
}
*/

/*
//5

let i = 46;
while(i++ < 670){
    if(i % 10 === 0) {
        console.log(i);
    }
}
 */

/*
//6

for(let i = 45; i <= 67; i++){
    console.log(i);
}
*/

/*
for(let i = 45; i <= 670; i++){
    if(i % 10 === 0){
        console.log(i);
    }
}
 */


/*
7//

let n = 7;
switch (n) {
    case 0:
        console.log("Ноль");
        break;
    case 1:
        console.log("Один");
        break;
    case 2:
        console.log("Два");
        break;
    case 3:
        console.log("Три");
        break;
    case 4:
        console.log("Четыре");
        break;
    case 5:
        console.log("Пять");
        break;
    case 6:
        console.log("Шесть");
        break;
    case 7:
        console.log("Семь");
        break;
    case 8:
        console.log("Восемь");
        break;
    case 9:
        console.log("Девять");
        break;

}
 */

/*
//1
function hello1(){
    return console.log("Привет, JavaScript");
}
hello1();

//2
function hello2(name){
    if(name == null){
        return console.log("Привет, гость");
    }else{
        return console.log(`Привет, ${name}`);
    }
}
hello2();


//3
function mul(n, m){
    return console.log(n * m);
}
mul(2,5);



//4
function repeat(str, n){
    for(let i = 0; i < n; i++){
        console.log(str);
    }
    // let i = 0;
    // while(i++ < n){
    //     console.log(str);
    // }
}
repeat("", 2);



//5
function rgb(a, b, c){
  return console.log (`rgb(${a}, ${b} , ${c})`);
}
rgb(23, 100, 134);



//6
function avg(...args){
    let result = 0;

    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return console.log(result / arguments.length);
}
avg(4, 10);



//7
function mul(a, b){
    return  a * b;
}

function m(a,b){
    return mul(a,b);
}

console.log(mul(2,2));
console.log(m(2,2));
console.log(mul(2,2) === m(2,2));

//8
function operation(a,b,c){
    switch (c){
        case '*':
        return mul(a,b);
    }
}

console.log(operation(2,4,"*"));

//9
function addN(n){
    return function (n){
        return n + n;
    }
}

console.log(addN(2)(2));

//10
function words(first, second, third, n) {
    let output = "";

        if(n % 10 == 1 && n % 100 != 11) {
             output = first;
        }
        else if(n % 10 >= 2 && n % 10 <= 4 && (n % 100 >= 20 || n % 100 < 10)) {
             output = second;
        }
    else {
             output = third;
        }
    return console.log (output);
}


words("товар", "товара", "товаров", 22);
*/