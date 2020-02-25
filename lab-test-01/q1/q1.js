function lowerCaseWords(arr){
    return new Promise((resolve, reject) => {
        try {
        words = arr.filter(item => (typeof item === 'string' || item instanceof String)).map(word => word.toLowerCase());
        resolve (words);
        } catch {
            reject ();
        }
    });
}