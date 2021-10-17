function remove(s) {
    //coding and coding....
    let result = s;
    let lastSymbol = s.charAt(s.length - 1);

    if (lastSymbol === '!') {
        result = s.slice(0, -1);
    }
    return result;
}


test("Is exclamination", () => {
    expect(remove("Hi!")).toBe("Hi");
});
test("Is exclamination", () => {
    expect(remove("Hi!!!")).toBe("Hi!!");
});

test("Is exclamination", () => {
    expect(remove("!Hi")).toBe("!Hi");
});

test("Is exclamination", () => {
    expect(remove("!Hi!")).toBe("!Hi");
});

test("Is exclamination", () => {
    expect(remove("Hi! Hi!")).toBe("Hi! Hi");
});

test("Is exclamination", () => {
    expect(remove("Hi")).toBe("Hi");
});

