// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

const { workerData } = require("worker_threads");

function pigIt(string) {
    let splitString = string.split(' ');
    // console.log(splitString)
    // console.log(splitString[0])
    let newWord = '';
    let newString = [];
    for (let i = 0; i < splitString.length; i++) {

        // console.log(typeof splitString);
        // console.log(splitString);

        // if (splitString[i].length>1){  

        newWord = splitString[i].slice(1) + splitString[i][0] + 'ay';

        newString.push(newWord);
        // }

    }


    for (let i = 0; i < newString.length; i++) {
        if (newString[i].includes('!')) {
            newString[i] = '!'
        }
    }

    for (let i = 0; i < newString.length; i++) {
        if (newString[i].includes('.')) {
            newString[i] = '.'
        }
    }

    for (let i = 0; i < newString.length; i++) {
        if (newString[i].includes(',')) {
            newString[i] = ','
        }
    }


    for (let i = 0; i < newString.length; i++) {
        if (newString[i].includes(';')) {
            newString[i] = ';'
        }
    }

    for (let i = 0; i < newString.length; i++) {
        if (newString[i].includes('?')) {
            newString[i] = '?'
        }
    }

    console.log(newString)
    console.log(newString.join(' '));
    return newString.join(' ');

}


// let string = 'Pig latin is cool'; // igPay atinlay siay oolcay

// pigIt('Pig latin is cool');

pigIt('Hello world !');     // elloHay orldway !