function removeVowels(str){
    res = ""
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i)
        if ( ! (char.toUpperCase() === "A" ||
                char.toUpperCase() === "E" ||
                char.toUpperCase() === "I" ||
                char.toUpperCase() === "O" ||
                char.toUpperCase() === "U"))
        {
            res += char;
        }
    }
    return res;
}
module.exports = removeVowels