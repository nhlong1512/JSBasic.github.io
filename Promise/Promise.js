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