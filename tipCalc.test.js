const tripCalc = require('./tipCalc');

test('Submit button exits', () => {
    expect(document.getElementsByClassName('btn btn-default')).toBeTruthy();
});

test('adds 1 + 2 to equal 3', () => {
    expect(tripCalc.addNumbers(1, 2)).toBe(3);
});

test('divides 4 by 2 to equal 2', () => {
    expect(tripCalc.divideNumbers(4, 2)).toBe(2);
});

test('multiply 2 by 3 to equal 6', () => {
    expect(tripCalc.multiplyNumbers(3, 2)).toBe(6);
});