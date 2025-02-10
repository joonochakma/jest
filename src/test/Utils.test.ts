import { getStringInfo, toUpperCase, StringUtils} from "../app/Utils";
describe('Utils test suite', ()=>{

    
    describe.only('StringUtils test', ()=>{
        
        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            console.log('Setup')

        })

        afterEach(()=>{
            //clearing mocks
            console.log('Teardown')

        })
        
        it('should return correct upper case ', ()=>{
            const sut = new StringUtils(); 
            const actual = sut.toUpperCase('abc');
            console.log('Actual test')

            expect(actual).toBe('ABC');

            })
    });


    
    
    it('should return upper case of a valid string', ()=>{
        //arrange
        const sut = toUpperCase;
        const expected ='ABC'
        
        //act
        const actual = toUpperCase('abc');

        //assert
        const result = toUpperCase('abc');
        expect(result).toBe(expected);
    })      

      describe('ToUpperCase examples ', ()=>{
        it.each([{input:'abc', expected:'ABC'},
            {input:'my-string', expected:'MY-STRING'},
            {input:'def', expected:'DEF'},
        ])('$input ToUpperCase should be $expected', ({input, expected})=>{
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        }); 
    })      

    describe('getStringInfo for arg My-String', ()=>{ 
        test('return right length', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.characters).toHaveLength(9);  
        })
        test('return right lowercase', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.lowerCase).toBe("my-string");  
        })

        test('return right uppercase', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.upperCase).toBe("MY-STRING");  
        })

        test('return right characters', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']); 
            expect(actual.characters).toContain<string>('M');
            expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g','M', 'y', '-',]));
        })
        
        test('return defined extra Info', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.extraInfo).toBeDefined();
        })

        test('return right extra Info', ()=>{
            const actual = getStringInfo("My-String");  
            expect(actual.extraInfo).toEqual({});
        })

    });

    
});