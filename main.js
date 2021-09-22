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