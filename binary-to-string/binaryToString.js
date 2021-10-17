function decodePass(passArr, bin) {
    // Code here
    let result = '';
    let newBin = bin.split(" ");
    let binCode = [];

    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    let word = binCode.join("");
    console.log(word);

    for (let i = 0; i < passArr.length; i++) {
        if (passArr[i] === word) {
            console.log(passArr[i] === word)
            result = passArr[i];
            return result
        }
    }
    return false
}


decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')

// test("Binary to string", () => {
//     expect(decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')).toBe('password123');
// });

// test("Binary to string", () => {
//     expect(decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')).toBe(false);
// });