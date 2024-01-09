const analyzeArray = require('./analyzeArray');

test("test Object", () => {
    const result = analyzeArray([3, 5, 10, 54]);
    expect(result).toEqual({ average: 18, min: 3, max: 54, length: 4 });
});
