// // var fullName = 'Nguyễn Hữu Long';
// // alert(fullName);
// console.log('Day la 1 dong log');
// // confirm('Ban tren 18 tuoi chu!!!');
// // prompt('Nhap so tuoi cua ban!!!');
// setTimeout(function() {
//     alert('Thong bao');
// },1000);//Sau 1 s sẽ hiện lên dòng thông báo
// setInterval (function() {
//     console.log('Day la log');
// },2000);

var result = null && false && 'a' && 'b';
console.log(result);
var rs = null || 0 || NaN || '' ||false;
console.log(rs);

var fullName ='Long Nguyễn';
console.log(fullName.length);//11

var firstName = 'Long';
var lastName = 'Nguyen';
console.log(`Toi la: ${firstName} ${lastName}`);// Toi la: Long Nguyen

fullName = 'Nguyen Huu Long';
console.log(fullName.length);//15
console.log(fullName.indexOf('Huu'));//7
console.log(fullName.indexOf('Huu', 10));
console.log(fullName.slice(7,10));//Huu

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);//Banana, Kiwi

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);//People visit W3schools

newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);//People visit W3school

text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);//Please visit W3Schools and W3Schools!

let x = 9.656;
console.log(x.toExponential(2));//9.66e+0
x.toExponential(4);
x.toExponential(6);

x = 9.656;
x.toFixed(0);
console.log(x.toFixed(2));//9.66
x.toFixed(4);
x.toFixed(6);

x = 123;
x.toString();
console.log((123).toString());//'123'
(100 + 23).toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());//Banana,Orange,Apple,Mango

console.log(fruits.join('------'));//Banana------Orange------Apple------Mango

console.log(fruits);

console.log(fruits.splice(1,1, 'Lemon', 'Watermelon'));

console.log(fruits);//['Banana', 'Lemon', 'Watermelon', 'Apple', 'Mango']


// function showDialog(){
//     alert('Hi xin chao cac ban!');
// }

// showDialog();


function writeLog (){
    var myString = '';
    for (var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('Log1', 'Log2', 'Log3');

function sum(a,b){
    return a+b;
}

console.log(sum(2,8));


var User = function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User ('Sơn', 'Đặng', 'Avatar');
var user = new User ('Long', 'Nguyễn', 'Avatar');

console.log(author);
console.log(author.getName());//Sơn Đặng

console.log(user);
console.log(user.getName());//Long Nguyễn

var date = new Date();
console.log(date);

var myInfo ={
    name: 'Long Nguyen',
    age: 20,
    address: 'Quang Tri, VN'
}

for (var long in myInfo){
    console.log(myInfo[long]);
}

var courses = [
    {
        id: 1, 
        name: 'javascript',
        coin: 250
    },
    {
        id: 2, 
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name:'HTML-CSS',
        coin: 100
    },
    {
        id: 4,
        name:'ReactJS',
        coin: 0
    },
    {
        id: 5,
        name: 'VueJS',
        coin: 300
    }
]

courses.forEach(function(course, index){
    console.log(index, course);
})

var isFree = courses.every(function(course){
    return course.coin === 0;    
})
console.log(isFree);//false

var isNotFree = courses.some(function(course){
    return course.coin > 0
})
console.log(isNotFree);//true

var findCourse = courses.find(function(course){
    return course.name ==='Ruby';
})
console.log(findCourse);//{id: 2, name: 'Ruby', coin: 0}

function courseHandler(course){
    return course.name;
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);//['javascript', 'Ruby', 'HTML-CSS', 'ReactJS', 'VueJS']


function coinHandler (luutru, value){
    return luutru + value.coin;
}

var totalCoin = courses.reduce(coinHandler,0);
console.log(totalCoin)//650

var depthArray = [1,2,[3,4,5],6,7,[8,9]];
var flatArray = depthArray.reduce(function(flatOutput,flatItem){
    return flatOutput.concat(flatItem);
},[]);
console.log(flatArray);

var headingNode = document.getElementById('heading');
console.log(headingNode);

var headingNodes = document.querySelector('.long');
console.log(headingNodes);

// // Dom Attribute
// var headingElement = document.querySelector('h1');
// console.log(headingElement);
// headingElement.setAttribute('title', 'LonglaRong')

headingElement.innerText('Long la Rong')