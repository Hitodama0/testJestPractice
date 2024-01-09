const reverse = require('./reverseString');

test("String reverse", () => {
    expect(reverse("string")).toBe("gnirts");
});

test("String reverse", () => {
    expect(reverse("car")).toBe("rac");
});
