function filterFalse(arr){
    res = [];
    arr.forEach(o => {
        if (! Object.values(o).includes(false))
        res.push(o)
    });
    return res;
}
module.exports = filterFalse