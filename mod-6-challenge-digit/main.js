function firstDigit(str) {
   for (let i=0; i<str.length; i++) {
       if (!isNaN(str[i])) {
           return str[i]
       }
   }
}

firstDigit('var_1__Int2')

/**
* Test Suite 
*/
// describe('firstDigit()', () => {
//     it('return the first digit in a string', () => {
//         // arrange
//         const str = "var_1__Int2";
        
//         // act
//         const result = firstDigit(str);

//         // log
//         console.log("result: ", result);
        
//         // assert
//         expect(result).toBe('1');
//     });
// });