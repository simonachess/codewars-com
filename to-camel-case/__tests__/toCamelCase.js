function toCamelCase(str) {
    let myArr = "";

if (str === "") return "";

    if (str.indexOf("-") !==-1) {
        myArr = str.split("-");
    }
    if (str.indexOf("_") !==-1) {
        myArr = str.split("_");
    }
    let result = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        let word = myArr[i];
        result += word[0].toUpperCase() + word.slice(1);
    }
    return result;
}


test("Test", () => {
    expect(toCamelCase('')).toBe('');
})

test("Test", () => {
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
})

test("Test", () => {
    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
})

test("Test", () => {
    expect(toCamelCase('A-B-C')).toBe('ABC');
})