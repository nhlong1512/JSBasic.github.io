//1. Var/ Let, Const
const line ='line1\n'
+ 'line2' + '\nline3'

console.log(line);



// Arrow functions
const logger = (log) =>{
    console.log(log)
}
logger('Arrow Function');//Arrow Function

const sum = (a,b) => a+b
console.log(sum(2,4))//6

//Classes 
class Course{
    constructor(name, price){
        this.name = name;
        this.price = price
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }
}
const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);
console.log(phpCourse);
console.log(jsCourse);

//Enhanced object literals

var name1 = 'Javascript'
var price1 = 1000

var course = {
    name1,
    price1,
    getName(){
        return name1;
    }
}

console.log(course.name1)//Javascript

//Destructuring
var array = ['Javascript', 'PHP', 'Ruby'];
var [a,b,c] = array;
console.log(a,b,c);//Javascript PHP Ruby

var [a, ,c] = array
console.log(a,c);//Javascript Ruby


var course = {
    name2: 'Javascript', 
    price2: 1200,
    img2: 'image-address'
}
var {name2, price2} = course
console.log(name2, price2);//Javascript 1200

var array = ['Javascript', 'PHP', 'Ruby'];
var [a,...rest] = array;
console.log(a);//Javascript
console.log(rest);//['PHP', 'Ruby']
