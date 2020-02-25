const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'massage' : 'delayed sucess!'}
        console.log("sucess");
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!')
        } catch (e){
            console.error(e)
        }
    }, 500)
}