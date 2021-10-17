const { TestWatcher } = require("@jest/core");

function positiveSum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+= element;
    });
    return sum;
}

test("Texting for fixed tests", () =>{
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15)
});