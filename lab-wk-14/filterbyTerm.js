function filterbyTerm(arr, filterTerm){
    return arr.filter((elem) => {
        return elem.url.match(filterTerm)
    })
}
module.exports = filterbyTerm