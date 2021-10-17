const zeroFuel = (distanceToPump, mpg, fuelLeft)=>{
    const maxDistance = fuelLeft * mpg;
    if(maxDistance >= distanceToPump){
        return true
    } else{
        return false;
    }
};




test('asasda', () =>{
    expect(zeroFuel(50,25,2)).toBe(true);
});

test('asasda', () => {
    expect(zeroFuel(100, 50, 1)).toBe(false);
});
