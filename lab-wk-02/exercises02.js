//Exercise 1:
function compareNumToTen(number){
    return new Promise((resolve, reject) => {
        if (number > 10)
            resolve(number + " is greater then 10");
        else
            reject(number + " is less then 10");
    })
}

compareNumToTen(15).then(result => console.log(result))
    .catch(error => console.log(error))
compareNumToTen(8).then(result => console.log(result))
    .catch(error => console.log(error))

//Exercise 2:
function makeUpperCase(words){
    return new Promise((resolve, reject) => {
        try{
            let ans = [];
            words.forEach(elem => {
                ans.push(elem.toUpperCase());
            });
            resolve(ans);
        } catch {
            reject("Error: non String in array");
        }
    })
}

function sortWords(words){
    return new Promise ((resolve, reject) =>{
        try{
            resolve( words.sort());
        } catch {
            reject("Error: non String in array");
        }
    })
}

const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixxedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames).then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
makeUpperCase(mixxedArray).then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//Exercise 3
var promise1 = 101;
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject){
    resolve("rabbit.. neo");
})

Promise.all([promise1, promise2, promise3]).then(function(vals){
    console.log(vals);
})

//Exercise 4
function delayedPromise(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num*num);
        })
    })
}

delayedPromise(5).then(relult => console.log(result))

async function asyncPromise(num){
    setTimeout(() => {
        return num*num;
    })
}
asyncPromise(6).then(result => console.log(result))