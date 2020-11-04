
let fun = require("../utlis/function.js");

var searchArr = [{id:"1", name:"Doe", price:46},
            {id:"2", name:"edfgDoe", price:4},
            {id:"3", name:"moon", price:4600}];
 
describe('Testing search return value', () => {     
	test(`Should return [{id:"3", name:"moon", price:4600}] when given "oo" & searchArr`, ()=>{
        let acual = fun.search("oo",searchArr);
        let expected = [{id:"3", name:"moon", price:4600}]
        expect(acual).toMatchObject(expected);
    }) 

    test(`Should return [] when given "adgsfgo" & searchArr`,()=>{
        let acual = fun.search("adgsfgo",searchArr);
        let expected = [];
        expect(acual).toMatchObject(expected);
    })

    test(`Should return [{id:"1", name:"Doe", price:46},  when given "o" & searchArr
                    {id:"2", name:"edfgDoe", price:4},
                    {id:"3", name:"moon", price:4600}] `,()=>{
        let acual = fun.search("o",searchArr);
        let expected = [{id:"1", name:"Doe", price:46},
                        {id:"2", name:"edfgDoe", price:4},
                        {id:"3", name:"moon", price:4600}];
        expect(acual).toMatchObject(expected);
    })

    test(`Should return when given "adgsfgo" & searchArr`,()=>{
        let acual = fun.search("",searchArr);
        let expected = null;
        expect(acual).toBe(expected);
    })
});

