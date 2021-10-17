function colorOf(r, g, b) {
    //coding here

    let first = r.toString(16);
    console.log(first.length)
    if (first.length < 2) {
        first = '0' + first;

    }
    let second = g.toString(16);
    console.log(second)
    if (second.length < 2) {
        second = '0' + second;
    }
    let third = b.toString(16);
    console.log(third)
    if (third.length < 2) {
        third = '0' + third;
    }

    let result = '#' + first + second + third;
    return result

}
console.log(colorOf(255, 0, 0))