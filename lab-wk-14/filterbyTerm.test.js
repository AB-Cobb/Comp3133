const filterByTerm = require('./filterbyTerm')
describe("Filter function", () => {
    test ("is should filter be search term (link)", () =>{
        const input  = [{id: 1, url : "url:https://url1.dev"},
                        {id: 2, url : "url:https://url2.dev"},
                        {id: 3, url : "url:https://link3.dev"}]   
        const output = [{id: 3, url : "url:https://link3.dev"}]
        expect(filterByTerm(input, "link")).toEqual(output);    
    });
})