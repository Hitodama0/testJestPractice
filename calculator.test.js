const calculator = require('./calculator');
const calc = new calculator();

test("Sum", () => {
    expect(calc.add(2,2)).toBe(4);
});


test("Sub", () => {
    expect(calc.sub(2,2)).toBe(0);
});

test("Mul", () => {
    expect(calc.mul(2,2)).toBe(4);
});

test("Div", () => {
    expect(calc.div(2,2)).toBe(1);
});