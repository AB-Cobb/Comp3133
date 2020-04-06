const removeVowels = require('./removeVowels')
describe("Remove Vowels Function", () => {
    test ("Removes vowels from sentance", () =>{
        const input  = 'A dog is a friendly pet if it’s trained properly';
        const output = ' dg s  frndly pt f t’s trnd prprly';
        expect(removeVowels(input)).toEqual(output);    
    });
})