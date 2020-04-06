function ex4(arr){
    res = []
    prevEven = arr[0]//asume first index is always evan???
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            res.push( arr[i]*prevEven)
        }
        else{prevEven = arr[i]}
    }
    console.log (res)
    return res;
}
module.exports = ex4;