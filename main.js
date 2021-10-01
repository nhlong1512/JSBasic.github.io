//LÀM VIỆC VỚI CHUỖI
var myString = 'Hoc JS tai F8';

//1. length
console.log(myString.length); // 8 => Show độ dài của chuỗi

//2. find index
console.log(myString.indexOf('JS'));// 4 => Show vị trí xuất hiện của cụm từ này trong chuỗi
console.log(myString.indexOf('ABC'));//-1 => Nếu không tìm được nó sẽ trả về giá trị là -1
var tempString = 'Hoc JS tai JS JS F8 no JS';
console.log(tempString.lastIndexOf('JS')); // 23 => Nó sẽ trả về vị trí cuối cùng xuất hiện JS
console.log(tempString.indexOf('JS',6)); //11 => Nó sẽ trả về vị trí đầu tiên sau vị trí số 6 xuất hiện chữ JS

//3. Cut string
console.log(myString.slice(4,6));// số 4 là vị trí đầu trong chuỗi, số 6 là vị trí kết thúc cho chuỗi cần cắt ==> JS
console.log(myString.slice(4)); // Cắt từ vị trí số 4 đến hết.
console.log(myString.slice(0)); // ==>Hoc JS tai JS JS F8 no JS  => Cắt từ đầu đến cuối.
console.log(myString.slice(-2)); // ==>F8 cắt ngược từ phải sang trái.

//4. Replace
console.log(myString.replace('JS', 'Javascript')); //Chữ Javascript sẽ thay thế cho chữ JS.
//Nhưng trường hợp replace này chỉ thay thế được 1 vị trí nên nếu chuỗi tempString thì chỉ thay thế chữ JS đầu tiên thôi
//Vì vậy ta phải dùng biểu thức chính quy
console.log(tempString.replace(/JS/g, 'Javascript'));//Hoc Javascript tai Javascript Javascript F8 no Javascript ==> 
//Như vậy ta đã có kết quả mong muốn

//5. Convert to upper case and convert to lower case
console.log(myString.toUpperCase());//HOC JS TAI F8
console.log(myString.toLowerCase());//hoc js tai f8


//6. Trim
console.log(myString.trim());// Chuẩn hóa chuẩn dấu cách (khoảng trắng thừa) cho chuỗi.

//7. Split
var languages = 'Javascript, PHP, Ruby, C++';
console.log(languages.split(', '));//['Javascript', 'PHP', 'Ruby', 'C++']0: "Javascript"1: "PHP"2: "Ruby"3: "C++"length: 4[[Prototype]]: Array(0)
//=> split sẽ giúp ta cắt chuỗi thành nhiều phần tử dạng mảng, split rất hay nhưng ta phải tìm ra những điểm chung cần cắt.
var language ='Javascript'
//Còn nếu muốn biến chuỗi thành các phần tử của mảng thì ta chỉ cần split('');
console.log(language.split(''));//['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//8.get a character by index.
const myString2 = 'Huu Long';
console.log(myString2.charAt(4));//==>L ==> Lấy ra chữ L vì nó nằm ở vị trí số 4
console.log(myString2.charAt(10));// trả về rỗng vì vị trí số 10 không có kí tự hay nói cách khác là trả về ''.
//Hoặc có cách khác nhanh hơn, tiện hơn là:
console.log(myString2[4]);//==>L


//Các phép toán  với kiểu số
var age =18;
var PI = 3.14;

var result = 20/'ABC';
console.log(result);// NaN => Kết quả không hợp lệ.
//để kiếm tra xem có hợp lệ hay không ta không thể dùng so sánh == hay === được mà phải dùng lệnh isNaN();
console.log(isNaN(result));//true ==> đúng 

//Có thể chuyển đổi kiểu number thành kiểu string bằng lệnh toString()


console.log(age.toString());

console.log(PI.toFixed(1));// 3.1 kiểu string, vì tham số trong fixed là 1 có nghĩa làm tròn còn 1 chữ số sau dấu phẩy



//Mảng

//Tạo mảng
var languages =[
    'Javascript',
    'Ruby',
    'Python',
    'PHP',
    'C++'
];

console.log(languages);
console.log(languages.length);//5 => languages có 5 phần tử.
console.log(languages[2]); // python

result = languages[languages.length - 1];
console.log(result);





//LÀM VIỆC VỚI MẢNG

var languages =[
    'Javascript',
    'Ruby',
    'Python',
    'PHP',
    'C++'
];

//1. To String
console.log(languages.toString());//Javascript,Ruby,Python,PHP,C++

// 2. Join
//Hàm này cực hay, nếu ta dùng join thì chuỗi sẽ biến về string nhưng thêm một kí tự vào giữa khoảng cách 2 phần tử, ví dụ nha
console.log(languages.join('-'));//Javascript-Ruby-Python-PHP-C++
console.log(languages.join('long'))//JavascriptlongRubylongPythonlongPHPlongC++
console.log(languages.join(''));//JavascriptRubyPythonPHPC++
//Lệnh này và lệnh split là 2 lệnh rất hay dùng để ta thao tác tiện hơn và xử lý khéo hơn trong việc chuổi và mảng.

// 3.Pop==> Xóa đi phần tử ở cuối mảng và trả về phần tử đã xóa.
console.log(languages.pop());//Xóa phần tử cuối mảng ==>C++
console.log(languages);//['Javascript', 'Ruby', 'Python', 'PHP']
//Nếu mảng đã trống mà vẫn pop thì sẽ trả về undefined

//4. Push ==> Ngược lại với pop thì push dùng để thêm phần tử cuối mảng và trả về độ dài của mảng
console.log(languages.push('C', 'C#', 'R'));//7 vì độ dài của mảng lúc này là 7
console.log(languages);//['Javascript', 'Ruby', 'Python', 'PHP', 'C', 'C#', 'R']

//5.Shift ==> Shift gần giống pop nhưng thay vì xóa phần tử ở cuối mảng thì lại xóa phần tử ở đầu mảng và trả về phần tử được xóa ví dụ
console.log(languages.shift());//Javascript
console.log(languages);//['Ruby', 'Python', 'PHP', 'C', 'C#', 'R']
//Và cũng tương tự như pop nếu khi mảng đã rỗng mà vẫn shift thì nó sẽ trả về undefined

//6.Unshift ==>Cái này khác push ở chỗ thay vì thêm ở cuối thì thêm ở đầu, nó cũng na ná nhau cả, ví dụ:
console.log(languages.unshift('SQL', 'MySQL'));//8 ==> Vì độ dài của mảng lúc này là 8 
console.log(languages);//['SQL', 'MySQL', 'Ruby', 'Python', 'PHP', 'C', 'C#', 'R']

//7.Splice==> Xóa cắt hay chèn phần tử mới vào mảng.
//Xóa
console.log(languages.splice(1,2)); //['MySQL', 'Ruby'] có nghĩa trong mảng ban đầu nó sẽ xóa từ vị trí thứ nhất và xóa 2 phần tử và trả về 2 phần tử đó
console.log(languages);// ['SQL', 'Python', 'PHP', 'C', 'C#', 'R']
//Còn với chèn thì ta phải thêm tham số thứ 3 và tham số thứ 2 tốt nhất nên cho băng 0
console.log(languages.splice(1,0,'Java','Long'));//[]
console.log(languages);//['SQL', 'Java', 'Python', 'PHP', 'C', 'C#', 'R'] ===> Như vậy Java đã được Chèn vào vị trí số 1
console.log(languages.splice(1,2,'Long'));//['Java', 'Python']
console.log(languages);//['SQL', 'Long', 'PHP', 'C', 'C#', 'R']


//8.Concat==>Để nối 2 array lại với nhau.
var languages2=[
    'Pascal',
    'Dart'
]
console.log(languages.concat(languages2));//['SQL', 'Long', 'PHP', 'C', 'C#', 'R', 'Pascal', 'Dart']


//9. Slice
console.log(languages.slice(1,3))//['Long', 'PHP'] ==> Cắt từ vị trí số 1 đến vị trí số 3
console.log(languages);//['SQL', 'Long', 'PHP', 'C', 'C#', 'R'] ==> Và mảng ban đầu vẫn giữ nguyên chứ không hề bị xóa.
//Như vậy nếu muốn copy mảng ta chỉ cần
console.log(languages.slice(0));//['SQL', 'Long', 'PHP', 'C', 'C#', 'R']



///HÀM

function showDialog() {
    // alert('Hi, xin chao cac ban!!!');
}

showDialog();



function writeLog(message) {
    console.log(message);
}

writeLog('Day la mot dong code');

function cong(a,b){
    return a+b;
}

console.log(cong(5,6));


writeLog('Day la mot dong code');

function cong(a,b){
    return [a,b];
}

console.log(cong(5,6));





///OBJECT TRONG JAVASCRIPT
var emailKey = 'email';

var myInfo = {
    name: 'Huu Long',
    age: 18,
    address: 'Quang Tri, VN'
};
console.log(myInfo); //name: 'Huu Long', age: 18, address: 'Quang Tri, VN'

console.log(myInfo.name);//Huu Long

myInfo.email = 'sayhello20021@gmail.com';

delete myInfo.age;

console.log(myInfo);//name: 'Huu Long', address: 'Quang Tri, VN', email: 'sayhello20021@gmail.com'


var myInfo = {
    name: 'Huu Long',
    age: 18,
    address: 'Quang Tri, VN',
    email: 'sayhello20021@gmail.com',
    getName: function() {
        return this.name;
    }
};

console.log(myInfo.getName());//Huu Long







//OBJECT CONSTRUCTOR
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Son', 'Dang', 'Avatar');
var user = new User('Long', 'Nguyen', 'Avatar');
author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Lieu co khoa asp.net khong ad';

console.log(author.getName());
console.log(user.getName());




//ĐỐI TƯỢNG DATE

var date = new Date();
console.log(typeof date);
console.log(date);//Mon Sep 20 2021 10:03:50 GMT+0700 (Giờ Đông Dương) ==> Là giờ hiện tại được cập nhật từ máy tính

var year = date.getFullYear();
console.log(year);//2021
var month = date.getMonth()+1;
console.log(month);//9 ==> Tháng luôn phải cộng 1 mới ra được tháng đúng.
var day = date.getDate();
console.log(day);//20
var hour = date.getHours();
console.log(hour);//10

console.log(`${day}/${month}/${year}`);//20/9/2021







//FOR LOOP

for(var i = 1; i<=10; i++){
    console.log(i);
}


//FOR/IN LOOP

var myInfo = {
    name: 'Huu Long',
    age: 19,
    address: 'Quang Tri, Viet Nam'
};

for(var key in myInfo){
    console.log(key);// in ra name, age, address
}

//Tương tự muốn lấy các value của key thì ta chỉ cần
for (var key in myInfo){
    console.log(myInfo[key]);//Huu Long, 19, Quang Tri, Viet Nam.
}

//Tương tự đối với mảng thì key của mảng chính là số và muốn lấy value thì ta làm tương tự như với object và CHUỖI cũng tương tự



//FOR/OF LOOP

var languages = [
    'Javascript',
    'Ruby',
    'R',
    'C#',
    'Python'
]//Đối với for of thì ta sẽ truy cập trực tiếp vào value chứ không phải key như for in 

for(var value of languages){
    console.log(value);//'Javascript','Ruby','R','C#','Python'
}

//Nhưng lưu ý với đối tượng object thì ta không thể sử dụng for of


//BREAK AND CONTINUE
for(var i =0 ;i<10; i++){
    console.log(i);
    if(i>=5){
        break;
    }
}//Tương tự với continue



//ARRAY METHODS


var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name:'Ruby',
        coin: 0
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name:'Ruby',
        coin: 100
    }

];

//for each
courses.forEach(function(course,index){
    console.log(index,course);
});

//every()
var isFree = courses.every(function(course,index){
    return course.coin === 0;
});

console.log(isFree);//false

//some() ngược lại với every
var isFree = courses.some(function(course,index){
    return course.coin === 0;
});
console.log(isFree);//true

//find()
var course = courses.find(function(course,index){
    return course.name === 'Ruby';
});
console.log(course);//{id: 3, name: 'Ruby', coin: 0}//nếu không có thì trả về undefined
//với find ta chỉ tìm được duy nhất một giá trị mặc dù có bao nhiêu phần tử có name: 'Ruby' đi chăng nữa
//Với filter sẽ cho ta tìm kiếm một danh sách các phần tử thỏa mãn.


//filter()
var listCourses = courses.filter(function(course,index){
    return course.name === 'Ruby';
});
console.log(listCourses);


//map methods
function courseHandler(course) {
    return{
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText:`Giá: ${course.coin}`
    }
}

var newCourses = courses.map(courseHandler);
console.log(newCourses)



// reduce() method

//muốn tính tổng số coin ta có thể dùng vòng lặp
var totalCoin =0;
for (var course of courses){
    totalCoin += course.coin;
}

console.log(totalCoin);//1250

//Thay vì viết dài dòng như này ta có thể sử dụng phương thức reduce()

function coinHandler(accumulator, currentValue){
    return accumulator + currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler,0);

console.log(totalCoin);//1250

//Hoặc

var totalCoin = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
}, 0);

console.log(totalCoin);//1250


//Tự định nghĩa phương thức reduce ta đặt tên cho nó là reduce2



//STRING ARRAY INCLUDES() METHODS

var title = 'Responsive Web Design';
console.log(title.includes('Responsive'));// True
console.log(title.includes('Ruby')); // False
console.log(title.includes('Responsive',2));//False // trả về false vì bắt đầu từ vị trí số 2 thì responsive không có.

var courses  = ['Javascript', 'PHP', 'Dart'];
console.log(courses.includes('Dart'));//True
//Tương tự như include() của chuỗi.






//MATH OBJECT

//Math.PI
console.log(Math.PI);//3.141592653589793 ==> Trả về giá trị PI

//Math.round() ==> Làm tròn số thôi, ví dụ 1.5 thì  = 2 
console.log(Math.round(1.5));//2
console.log(Math.round(5.134));//5

//Math.abs() ==> Trả về giá trị tuyệt đối
console.log(Math.abs(-5.23));//5.23

//Math.ceil() ==>Làm tròn trên
console.log(Math.ceil(4.2322));//5

//Math.floor() ==>Làm tròn dưới
console.log(Math.floor(5.9433));//5

//Math.random() ==> Trả về một số thập phân bất kì nhỏ hơn 1
console.log(Math.random());//0.644111603852775
console.log(Math.random());//0.021482357806977825
//==> Nếu muốn tạo random số nguyên từ 0 đến 100 thì ta có thể sử dụng làm tròn dưới
console.log(Math.floor(Math.random()*100));//26
console.log(Math.floor(Math.random()*100));//17
console.log(Math.floor(Math.random()*100));//91

//Math.min() và Math.max()
console.log(Math.max(-100, -200, 0, 10, 99, 50));//99
//Tương tự với Math.min();

// Array.prototype.map2 = function(callback){
//     for(var i =0; i<this.length; i++){
//         callback(this[i], i);
//     }
// }

var courses =[
    'Javascript',
    'PHP',
    'Ruby'
];

// courses.map2();




//MY FOR EACH METHOD

Array.prototype.forEach2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

var courses =[
    'Javascript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});


//MY FILTER METHOD

Array.prototype.filter2 = function(callback){
    var output = [];

    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }

    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

var filterCourses = courses.filter2(function(course, index, array){
    return course.coin>700;
})

console.log(filterCourses)





//MY SOME METHOD

Array.prototype.some2 = function(callback){
    for( var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];


var result = courses.some2(function(course, index, array){
    return course.isFinish;
});

console.log(result);



//MY EVERY METHOD

Array.prototype.every2 = function(callback){
    for( var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this) === false){
                return false;
            }
        }
    }
    return true;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    }
];


var result = courses.every2(function(course, index, array){
    return course.isFinish;
});

var result2 = courses.every2(function(course, index, array){
    return course.coin>700;
})

console.log(result);//true

console.log(result2);//false





//DOM - DOCUMENT OBJECT MODEL

document.write('Hello Nguyen Huu Long!!!');// Vì bên chương trình index.html js được để sau h1 HTML DOM nên khi write ra dòng hello nguyen huu long sẽ sau
// document.write giúp ta có thể viết một chuỗi chèn vào được trong html, sau đây chúng ta sẽ học thêm nhiều ứng dụng của document.

//1. Elements: ID, class, tag, CSS selector, HTML collection
//2. Attribute
//3. Text

//ID
var headingNode = document.getElementById('heading');
console.log(headingNode);//==> Lấy ra được thẻ h1 đó trong console, lấy bằng id
//class
var headingNodes = document.getElementsByClassName('heading2');
console.log(headingNodes);// Trả về 3 thẻ h2 có class = "heading2";
//tag
var headingNodes2 = document.getElementsByTagName('h2');
console.log(headingNodes2);//Cái này cũng sẽ trả về 3 cái thẻ h2 y đúc cái ByClassName nhưng khác ở chỗ nó truyền vào không phải tên class mà là cái element h2
//CSS selector
var headingNode1 = document.querySelector('#heading');
console.log(headingNode1);//==> Với trường hợp này nó sẽ truy cập đến thẻ h1 có trong index.html
var headingNode2 = document.querySelector('.heading2');
console.log(headingNode2);// Truy cập đến thẻ h2 Nguyen đầu tiên của index.html
//Nếu muốn select hết được các thẻ khác trong class heading2 thì ta sẽ sử dụng
var headingNodes3 = document.querySelectorAll('.heading2');
console.log(headingNodes3);//Nó sẽ trả về 1 NodeList gồm 3 thẻ h2 có class là heading2 trong index.html
//LƯU Ý: PHƯƠNG THỨC SELECTOR BẰNG CÁCH QUERYSELECTOR LÀ PHƯƠNG THỨC ĐƯỢC DÙNG NHIỀU HƠN CẢ VÌ NÓ TIỆN LỢI VÀ CÓ THỂ TRUY CẬP Y ĐÚC CÁCH BẠN TRUY CẬP BẰNG HTML
//NÊN NÓ ĐƯỢC DÙNG PHỔ BIẾN, MÌNH NGHĨ MÌNH CŨNG SẼ DÙNG CÁI NÀY NHIỀU =))).


//GET ELEMENTS METHOD 2
//Ta cũng có thể truy xuất bằng cách

{/* <div class="box">
    <div class="children">Children</div>
    <div class="children">Children</div>
</div> */}


// var boxElement = document.querySelector('.box')[0];
// var childrenElements = boxElement.querySelectorAll('.children');


//GET ELEMENTS METHOD 3
{/* <h1>Học lập trình tại F8</h1>

<section>
    <h2>Học JS HTML DOM</h2>
</section>

<div>
    <h3>Làm bài tập ngay trên F8</h3>
</div> */}

//Ví dụ muốn lấy ra h1 element, h2 element, h3 element thì ta có thể dùng

var h1Element = document.getElementsByTagName('h1')[0];
var h2Element = document.getElementsByTagName('h2')[0];
var h3Element = document.getElementsByTagName('h3')[0];


//DOM ATTRIBUTES
var headingElement = document.querySelector('h1');
console.log(headingElement);//<h1 id="heading">HTML DOM</h1>

//Bây giờ muốn thêm attributes vào element thì
headingElement.title = 'heading';//<h1 id="heading" title="heading">HTML DOM</h1>
headingElement.id = 'huulong';//<h1 id="huulong" title="heading">HTML DOM</h1>
headingElement.className ='name';//<h1 id="huulong" title="heading" class="name">HTML DOM</h1>

//hoặc ta có thể dùng phương thức

var heading = document.querySelector('h2');
console.log(heading);//<h2 class="heading2">NGUYEN</h2>

heading.setAttribute('id', 'long');//Cái này cần chuyền 2 đối số đó là kiểu attribute cần thềm và tên attribute//<h2 class="heading2" id="long">NGUYEN</h2>
heading.setAttribute('href', 'link');//<h2 class="heading2" id="long" href="link">NGUYEN</h2> ==>Kể cả heading k có kiểu attribute href cũng được thêm vào
heading.setAttribute('daa', 'uit');//<h2 class="heading2" id="long" href="link" daa="uit">NGUYEN</h2>

//Giờ muốn lấy ra tên của kiểu attribute thì làm cách nào? => getAttribute
console.log(heading.getAttribute('id'));//long ==> đối số chuyền vào cho kiểu getAttribute là kiểu attribute
console.log(heading.getAttribute('href'));//link


//innerText và textContent

var headingElement = document.querySelector('h1');

console.log(headingElement.innerText);//HTML DOM==> Lấy ra
console.log(headingElement.textContent);//HTML DOM


//Gán
headingElement.innerText = 'New heading';//New heading, innerText trả về cái gì ta nhìn thấy bên trang index.html
headingElement.textContent = 'New second heading';//New second heading, textContent trả về những cái nằm trong thẻ, kể cả nội dung....



//InnerHTML và OuterHTML Property => Thêm 1 element vào trong 1 element đã có sẵn.
var boxElement = document.querySelector('.box');
console.log(boxElement.innerHTML);//<h2>Outer</h2>
boxElement.innerHTML = '<h1>Heading</h1>';//<div class="box"><h1>Heading</h1></div> ==>Nó sẽ được hiểu là một đoạn HTML và nó sẽ thêm vào 
//trong thẻ div theo dạng HTML

console.log(boxElement.innerHTML);//<h1>Heading</h1>

console.log(boxElement.outerHTML);//<div class="box"><h1>Heading</h1></div> ==>Nó in ra luôn cả thẻ div khác với inner chỉ in ra nd trong box

//Giờ thì setter cho outerHTML nào

boxElement.outerHTML = '<span>NguyenHuuLong</span>';//<span>NguyenHuuLong</span> ==>Thẻ div đã bị thay bằng thẻ span

//Qua đó ta rút ra được innerHTML sẽ thao tác trong thẻ cha của nó tức là thẻ con
//Còn outerHTML sẽ thao tác ở ngay trên chính thẻ cha nên setter của outerHTML sẽ là ghi đè cái cũ

console.log([boxElement])



//DOM STYLE
var box2Element = document.querySelector('.box2');
//Ta sẽ CSS inline cho cái thẻ div.box2 này mà không cần dùng đến file css.
box2Element.style.width = '200px';
box2Element.style.height = '100px';
box2Element.style.backgroundColor = 'green';//==> Hãy chạy live sever để xem kết quả nhận được.

//Ta cũng có thể tạo DOM CSS bằng cách khác
var box3Element = document.querySelector('.box3');
Object.assign(box3Element.style, {
    width: '200px',
    height: '300px',
    backgroundColor: 'blue'
});


//CLASSLIST PROPERTY

//add ==>Thêm 1 class vào một element cho trước
//contains => Kiểm tra xem 1 class có tồn tại trong element không
//remove => Nhìn cái tên cũng hiểu chức năng của nó là để remove 1 class ra khỏi element
//toggle=> Khi được chạy, lệnh toggle sẽ kiểm tra xem class được nhập có tồn tại trong element không, 
//nếu có thì gỡ bỏ nó đi và nếu không có thì lại thêm vào


//add
var box4Element = document.querySelector('.box4');
box4Element.classList.add('red', 'blue');// => in ra dòng chữ Rich màu đỏ, <div class="box4 red blue">
//contains
console.log(box4Element.classList.contains('red'));//true ==>Vì class red có tồn tại trong box4Element nên ok.
//remove, giờ ta sẽ thử xóa thằng red ra khỏi box4Element
box4Element.classList.remove('red');
console.log(box4Element.classList);//=> box4Element chỉ còn 2 class là .box4 và .blue //<div class="box4 blue">
//toggle
box4Element.classList.toggle('red');//<div class="box4 blue red"> ==>red không có nên nó đã thêm vào
box4Element.classList.toggle('red');//<div class="box4 blue"> ==>Bây giờ khi đã có thì nó lại xóa đi, đó là chức năng khá đặc biệt của toggle



//DOM EVENTS
//1. Attributes events
//2. Assign event using the element node
//Muốn tìm hiểu thêm về các event thì search dom event html w3school trong này có rất nhiều event nhưng hôm nay ta sẽ học một số cái

//Bây giờ ta sẽ thử làm thao tác khi click vào thẻ h2 của .box4 thì sẽ trả về ở console chính nó

var h2Box4Element = document.querySelectorAll('.box4 h2');
for(var i =0; i<h2Box4Element.length; i++){
    h2Box4Element[i].onclick = function(e){
        console.log(e.target);
    }
}
//Qua bên web để thử click và xem kết quả nào ^^


//VÍ DỤ VỀ DOM EVENTS TRONG THỰC TẾ
//1.Input / select
//2. Key up / down

var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function(e){
    console.log(e.target.value);//=>Lấy ra value của thẻ input
}

var inputElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function(e){
    console.log(e.target.checked);//=>khi check sẽ trả về là true ngược lại thì false
}

var inputElement = document.querySelector('select');
inputElement.onchange = function(e){
    console.log(e.target.value);//=>Trả về giá trị khi mình select
}


//DOM EVENTS
//1.preventDefault
//2.stopPropagation// loại bỏ sự kiện nổi bọt




//EVENT LISTENER
//1. Xử lý nhiều việc khi một event xảy ra
//2. Lắng nghe/ Hủy bỏ lắng nghe
var btn = document.getElementById('btn');
btn.onclick = function(){
    console.log('Viec 1');
    console.log('Viec 2');
    alert('Viec 3');
    //=> Khi click vào nó sẽ thực hiện cả 3 việc
}

setTimeout(function(){
    btn.onclick = function(){
       
    }
},3000);










