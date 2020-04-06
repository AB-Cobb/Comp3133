const ex4 = require('./ex4.js')
describe("ex4 function", () => {
    test ("For every odd integer, multiply it by the previous even element.", () =>{
        const input  = [ 2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ]  
        const output = [ 66, 164, 54, 462, 66, 78, 162 ]
        expect(ex4(input)).toEqual(output);    
    });
})