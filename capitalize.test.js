const capitalize = require('./capitalize');

test("String capitalize", () => {
    expect(capitalize("string")).toBe("String");
});

test("String capitalize", () => {
    expect(capitalize("STriNG")).toBe("String");
});

test("String capitalize", () => {
    expect(capitalize("STRING")).toBe("String");
});