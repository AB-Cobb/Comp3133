const filterFalse = require('./filterFalse.js')
describe("Filter false", () => {
    test ("it sould remove objs with false values", () =>{
        const input  = [
                        {authenticated : true, id : "1"},
                        {authenticated : false, id : "2"},
                        {authenticated : false, id : "3"},
                        {authenticated : true, id : "4"},
                        {authenticated : true, id : "5"}
                    ]   
        const output = [
            {authenticated : true, id : "1"},
            {authenticated : true, id : "4"},
            {authenticated : true, id : "5"}
        ]
        expect(filterFalse(input)).toEqual(output);    
    });
})