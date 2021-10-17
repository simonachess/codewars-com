function periodIsLate(last, today, cycleLength) {

    let difference = Math.ceil((today.getTime() - last.getTime()) / (1000 * 3600 * 24));
    if (difference > cycleLength) {  
        return true
    }
    else {
        return false;
    }
}

test('period is late', () => {
    expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)).toBe(false);
});

test('period is late', () => {
    expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)).toBe(true);
});

