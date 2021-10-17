var isSquare = function (n) {
    let result = false;
    let square = Math.sqrt(n);
    
    if (Number.isInteger(square)){
        result = true
    }
    
    return result; // fix me
}


// test('isSquare', () => {
//     expect(isSquare(-1)).toBe(false)
// });

// test('isSquare', () => {
//     expect(isSquare(0)).toBe(false)
// });

test('isSquare', () => {
    expect(isSquare(3)).toBe(false)
});

test('isSquare', () => {
    expect(isSquare(4)).toBe(true)
});

// test('isSquare', () => {
//     expect(isSquare(25)).toBe(true)
// });

test('isSquare', () => {
    expect(isSquare(26)).toBe(false)
});

