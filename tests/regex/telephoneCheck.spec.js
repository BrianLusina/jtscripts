var expect = require("expect");
var telephoneCheck = require("../../jssnips/Regex/telephoneCheck/telephoneCheck");

test("Telephone Check tests", function(){
    test("test 1", function(){
        expect(telephoneCheck('555-555-5555')).toEqual(true);
    });
    
    test("test 2", function(){
        expect(telephoneCheck('1 555-555-5555')).toEqual(true);
    });
    
    test("test 3", function(){
        expect(telephoneCheck('1 (555) 555-5555')).toEqual(true);
    });

    test("test 4", function(){    
        expect(telephoneCheck('5555555555')).toEqual(true);
    });

    test("test 5", function(){    
        expect(telephoneCheck('555-555-5555')).toEqual(true);
    });

    test("test 6", function(){    
        expect(telephoneCheck('(555)555-5555')).toEqual(true);
    });

    test("test 7", function(){    
        expect(telephoneCheck('1(555)555-5555')).toEqual(true);
    });

    //test.todo('look at this');
    // test("test 8", function(){    
    //     expect(telephoneCheck('1 555)555-5555')).toEqual(false);
    // });

    test("test 9", function(){    
        expect(telephoneCheck('1 555 555 5555')).toEqual(true);
    });

    test("test 10", function(){
        expect(telephoneCheck('1 456 789 4444')).toEqual(true);
    });

    test("test 11", function(){
        expect(telephoneCheck('123**&!!asdf#')).toEqual(false);
    });

    test("test 12", function(){
        expect(telephoneCheck('55555555')).toEqual(false);
    });

    test("test 13", function(){    
        expect(telephoneCheck('(6505552368)')).toEqual(false);
    });
    
    test("test 14", function(){
        expect(telephoneCheck('2 (757) 622-7382')).toEqual(false);
    });

    test("test 15", function(){
        expect(telephoneCheck('0 (757) 622-7382')).toEqual(false);
    });

    test("test 16", function(){
        expect(telephoneCheck('-1 (757) 622-7382')).toEqual(false);
    });

    test("test 17", function(){
        expect(telephoneCheck('2 757 622-7382')).toEqual(false);
    });
    
    test("test 18", function(){    
        expect(telephoneCheck('10 (757) 622-7382')).toEqual(false);
    });
    
    test("test 19", function(){    
        expect(telephoneCheck('27576227382')).toEqual(false);
    });

    test("test 20", function(){    
        expect(telephoneCheck('(275)76227382')).toEqual(false);
    });

    test("test 21", function(){    
        expect(telephoneCheck('2(757)6227382')).toEqual(false);
    });

    test("test 22", function(){    
        expect(telephoneCheck('2(757)622-7382')).toEqual(false);
    });
    
    test("test 23", function(){    
        expect(telephoneCheck('555)-555-5555')).toEqual(false);
    });

    test("test 24", function(){
        expect(telephoneCheck('(555-555-5555')).toEqual(false);
    });
})