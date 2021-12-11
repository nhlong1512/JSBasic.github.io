var promise = new Promise(
    function(resolve, reject){
        // logic
        // Thành công: resolve()
        // Thất bại: reject()
        // resolve();
        reject();
    }
)

promise
    .then(function(){
        console.log('Successfully!');
    })
    .catch(function(){
        console.log('Failure!');
    })
    .finally(function(){
        console.log('Done!')
    })


var promise1 = new Promise (
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 2000);
    }
)

var promise2 = new Promise (
    function(resolve){
        setTimeout(function(){
            resolve([2, 3]);
        }, 5000);
    }
)

Promise.all ([promise1, promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })



///////////////////////////////////FETCH///////////////////////////////


var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(response){
        return response.json();
    })

    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html
    })

