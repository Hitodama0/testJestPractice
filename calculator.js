function Calculator() {
    this.add = function(num1, num2) {
        return num1 + num2;
    };

    this.sub = function(num1, num2) {
        return num1 - num2;
    };

    this.mul = function(num1, num2) {
        return num1 * num2;
    };

    this.div = function(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero";
        }
    };
}

module.exports = Calculator;