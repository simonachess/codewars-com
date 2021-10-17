const { Console } = require("console");
function isWhiteSpace(symbol) {
    if (symbol === ' ' || symbol === '\t' || symbol === '\n' || symbol === '\r' || symbol === '\b' || symbol === '\v' || symbol === '\f') {
        return true
    }
    return false
}
// console.log(isWhiteSpace('\tsdvvds'[0]))

function isAlphaNumeric(symbol) {
    if ((symbol >= '0' && symbol <= '9') || (symbol >= 'A' && symbol <= 'Z') || symbol == '_' || (symbol >= 'a' && symbol <= 'z')) {
        return true
    }
    return false
}
// console.log(isAlphaNumeric(';w12424'[0]))


function golfScore(code) {
    // Write your code here

    let score = 0;
    let groupStart = false;
    for (e of code) {

        if (isAlphaNumeric(e)) {

            if (!groupStart) {
                score++;
            }
            groupStart = true;
        } else {

            groupStart = false;
            if (!isWhiteSpace(e)) {
                score++;
            }
        }
        console.log(e, e.charCodeAt(0), score)
    }
    console.log(code)
    return score
}

// let a = 48;
// let b = '\\';
// console.log(a==b);
// console.log(a===b);
// console.log(a,b)

// let code = `   \t\t \t \n \n \n \r \r\r`;
// let code = `hello world`;
// let code = `h e l l o  w o r l d`;
// let code = `hello world`;
// let code = `hello_world`;
// let code = `10293 10000 999 42`;
// let code = `1 2 3`;
// let code = `2, 000   Hello, Bob`;
// let code = `working-class 1-2`;
// let code = ` function() { return 'hello123' } `;
// 

console.log(golfScore(code));

// describe("Solution", function () {
//     it("should ignore whitespace", function () {
//         Test.assertEquals(golfScore(`   \t\t \t \n \n \n \r \r\r`), 0, "whitespace characters should count as 0");
//     })

//     it("should count groups of consecutive alphanumeric characters as 1", function () {
//         Test.assertEquals(golfScore(`hello world`), 2, "groups of consecutive letters should count as 1");
//         Test.assertEquals(golfScore(`h e l l o  w o r l d`), 10, "non-consecutive letters should each count as 1");
//         Test.assertEquals(golfScore(`hello_world`), 1, "underscores count as an alphanumeric character");
//         Test.assertEquals(golfScore(`10293 10000 999 42`), 4, "groups of consecutive numbers should count as 1");
//         Test.assertEquals(golfScore(`1 2 3`), 3, "non-consecutive numbers should each count as 1");
//         Test.assertEquals(golfScore(`abc10293 10000def t9e9e9`), 3, "groups of alphanumeric characters should count as 1");
//     })

//     it("should count each non-alphanumeric character as 1", function () {
//         Test.assertEquals(golfScore(` . , () {} [] = + - * / < >’ " ; `), 18, "each non-alphanumeric character should count as 1");
//         Test.assertEquals(golfScore(` .,.;; += "" `), 9, "each non-alphanumeric character should count as 1");
//     })

//     it("should count mixing of character types correctly", function () {
//         Test.assertEquals(golfScore(`2,000   Hello,Bob `), 6, "commas will break up a group of numbers or letters");
//         Test.assertEquals(golfScore(`working-class 1-2`), 6, "hyphens will break up a group of numbers or letters");
//         Test.assertEquals(golfScore(` function() { return 'hello123' } `), 9, "code for a minimal function should score correctly");
//     })

//     it("should give minified code the same score as the equivalent non-minified code", function () {
//         Test.assertEquals(golfScore(`

//       function x() {
//         let a=2,b=3;c=a*b;return c;
//       }

//     `), 24, "minified code should score correctly");

//         Test.assertEquals(golfScore(`

//       function myFunction() {
//         const firstNumber   = 2,
//               second_Number = 3,
//               product       = firstNumber * secondNumber;

//         return product;
//       }

//     `), 24, "non-minified code should score correctly");
//     })
// })