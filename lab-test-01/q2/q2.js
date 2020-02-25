function resolvedPromise (){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            let success = { 'massage' : 'delayed sucess!'}
            console.log("sucess");
            resolve(success)
        }, 500)
        
    })
}
function rejectPromise (){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!')
            } catch (e){
                reject(e);
            }
        }, 500)
    })
}

console.log(resolvedPromise())
console.error(rejectPromise())