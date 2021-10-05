//JSON LÀ GÌ
//1.Nó là một định dạng dữ liệu (chuỗi)
//2. Javascript Object Notation(JSONxcvbnm)
//3. JSON: Number, String,  Boolean, Null, Array, Object
//Mã hóa / Giải mã(Encode / Decode)
//Stringify: Từ Javascript types ->JSON
 //Parse: từ Json -> Javascript types

 var a = 'true';
 console.log(JSON.parse(a));//true

 var json = '["Javascript", "PHP"]';
console.log(JSON.parse(json));//['Javascript', 'PHP']

console.log(JSON.stringify(json));//"[\"Javascript\", \"PHP\"]" ==>Dạng chuỗi
console.log(typeof JSON.stringify(json));//string


//PROMISE
//-Sync(Đồng bộ)
//-Async(Bất đồng bộ)
//Những thao tác bất đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

var promise = new Promise(
    //Executor
    function(resolve, reject){//resolve có nghĩa là thành công còn reject có nghĩa là thất bại
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        reject('Co loi!')
        resolve('Long dep trai!')
    }
);

promise
    .then(function(long){
        console.log(long);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log('Done!');
    });


//CÂU HỎI PHỎNG VẤN: EM CÓ NẮM ĐƯỢC KHÁI NIỆM PROMISE KHÔNG??
// TRẢ LỜI PHỎNG VẤN: EM CÓ!!! PROMISE LÀ MỘT KHÁI NIỆM SINH RA ĐỂ XỬ LÝ CÁC THAO TÁC BẤT ĐỒNG BỘ VÀ TRƯỚC KHI CÓ 
// PROMISE CHÚNG TA THƯỜNG SỬ DỤNG CALLBACK(), CALLBACK SẼ XẢY RA MỘT VẤN ĐỀ ĐÓ LÀ CALLBACK HELL NÓ SẼ BỊ SÂU VÀO 
// RẤT KHÓ NHÌN, CODE BỊ RỐI RẮM, KHÓ HIỂU, NÊN PROMISE ĐƯỢC SINH RA TRONG PHIÊN BẢN MỚI HƠN - PHIÊN BẢN ES6 VÀ 
// CHÚNG TA CÓ THỂ SỬ DỤNG NÓ ĐỂ KHẮC PHỤC TÌNH TRẠNG CALLBACK HELL GIÚP CHÚNG TA VIẾT CODE KHÔNG BỊ SÂU VÀO DỄ
// ĐỌC DỄ HIỂU HƠN 
// ĐỂ TẠO RA MỘT PROMISE CHÚNG TA SỬ DỤNG TỪ KHÓA NEW VỚI PROMISE VÀ TRONG CONSTRUCTOR CỦA NÓ CHÚNG TA SẼ TRẢ LẠI
// MỘT EXCUTOR FUNCTION(), TRONG EXCUTOR FUNCION CHÚNG TA SẼ NHẬN ĐƯỢC 2 THAM SỐ LÀ RESOLVE VÀ REJECT, RESOLVE CHÚNG TA 
// GỌI NÓ KHI CÁI THAO TÁC CỦA CHÚNG TA THÀNH CÔNG VÀ REJECT CHÚNG TA GỌI NÓ KHI CÁI THAO TÁC CỦA CHÚNG TA THẤT BẠI
// VÀ KHI CHÚNG TA SỬ DỤNG PROMISE CHÚNG TA SẼ SỬ DỤNG CÁC PHƯƠNG THỨC THEN() VÀ CATCH(). NÓ SẼ THỰC THI THEN() KHI 
// PROMISE CỦA CHÚNG TA ĐƯỢC RESOLVE VÀ CATCH() KHI PROMISE CỦA CHÚNG TA BỊ REJECT




//PROMISE METHODS(resolve, reject, all)
//1. Promise.resolve
//2. Promise.reject
//3. Promise.all
var promise = new Promise(function(resolve, reject){
    // resolve('Success!');
    reject('Error!');
})

promise
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err);
    });


//THỰC HÀNH, VÍ DỤ VỀ PROMISE

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2, 
        name: 'Son Dang'
    },
    {
        id: 3, 
        name: 'Hung Dam'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video a :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra em oi!'
    }
];

//1. Lấy comments
//2. Từ comments lấy ra user_id
// từ user_id lấy ra user tương ứng

//Fake API

function getComments() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000)
    });
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        })
        resolve(result);
    }, 1000);
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });

        console.log(userIds);
    });




//FETCH