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
