var h1Element = document.querySelector('h1');
h1Element.innerText = 'Long Not Nguyen Huu Long';
h1Element.textContent ='RichNguuuu'

var boxElement = document.querySelector('.box');
console.log(boxElement);

boxElement.innerHTML = '<h2>Rich Dang Yeu</h2>'
boxElement.innerHTML = '<h3>Rich Khong Nguuuu</h3>'
// Ghi đè ngay luôn cái thẻ h2 cũ
console.log(boxElement.outerHTML);
//<div class="box"><h3>Rich Khong Nguuuu</h3></div>
console.log(boxElement.innerHTML);
//<h3>Rich Khong Nguuuu</h3>
//Qua 2 dòng in ta đã có thể hiểu tương đối phạm vi hoạt động của 2 thẻ này

var h1Element = document.querySelector('h1');
var h1TagName = h1Element.tagName;
var h1NextElementSibling = h1Element.nextElementSibling;

console.log(h1Element);
console.log(h1TagName);
console.log(h1NextElementSibling);

console.log(document.querySelector('body script'))
console.log(boxElement.style);

Object.assign(boxElement.style,{
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})


console.log(boxElement.classList)
console.log(boxElement.classList.length)//1

boxElement.onclick = function(){
    console.log('rich nguuu')
}

var h4Element = document.querySelector('h4')
h4Element.onclick = function(){
    Object.assign(h4Element.style,{
        color: 'green'
    })
};


var inputElement = document.querySelector('input[type = "text"]')
console.log(inputElement)

inputElement.onchange = function(e){
    console.log(e.target.value);
}

inputElement.onkeyup = function(e){
    console.log(e.which);
}