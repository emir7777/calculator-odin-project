const add = function(x, y) {
    return parseInt(x) + parseInt(y);
}
const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}
const divide = function(x, y) {
    if (y === 0) {
        return "error";
    } else {
        return x / y;
    }
}

let operator, num1, num2;

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "/":
            return divide(num1, num2);
        case "*":
            return multiply(num1, num2);
    }
}

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplyBy = document.querySelector("#multiply");
const divideBy = document.querySelector("#divide");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const decimal = document.querySelector("#decimal");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const display = document.querySelector(".screen");

const equals = document.querySelector("#equals");

let displayVal = "";
let awaitingNext = false;
let equalsOperator = false;
let anyOperator = false;

function displayUpdate(displayVal) {
    if (displayVal === '0' || displayVal === '') {
        display.textContent = "0";
    } else if (parseFloat(displayVal) > 999999999) {
        display.textContent = "Error";
    } else {
        displayVal = displayVal.toString().substring(0, 9);
        display.textContent = displayVal;
    }
}

function clearDisplay() {
    displayVal = "";
    displayUpdate(0);
    awaitingNext = false;
}

clear.addEventListener("click", () => {
    clearDisplay();
    resetNums();
});

function resetNums() {
    num1 = null;
    num2 = null;
    operator = "";
}

plus.addEventListener("click", () => {
    if (!num1 && !num2 && (displayVal === '')) {
        return;
    }
    if ((num1 != null) && (!equalsOperator && !anyOperator)) {
        num2 = parseFloat(displayVal);
        displayVal = operate(operator, num1, num2);
        displayUpdate(displayVal);
    }

    if (displayVal === '') displayVal = 0;
    num1 = parseFloat(displayVal);
    operator = "+";
    awaitingNext = true;
    equalsOperator = false;
    anyOperator = true;
});

minus.addEventListener("click", () => {
    if (!num1 && !num2 && (displayVal === '')) {
        return;
    }
    if ((num1 != null) && (!equalsOperator && !anyOperator)) {
        num2 = parseFloat(displayVal);
        displayVal = operate(operator, num1, num2);
        displayUpdate(displayVal);
    }

    if (displayVal === '') displayVal = 0;
    num1 = parseFloat(displayVal);
    operator = "-";
    awaitingNext = true;
    equalsOperator = false;
    anyOperator = true;
});

multiplyBy.addEventListener("click", () => {
    if (!num1 && !num2 && (displayVal === '')) {
        return;
    }
    if ((num1 != null) && (!equalsOperator && !anyOperator)) {
        num2 = parseFloat(displayVal);
        displayVal = operate(operator, num1, num2);
        displayUpdate(displayVal);
    }

    if (displayVal === '') displayVal = 0;
    num1 = parseFloat(displayVal);
    operator = "*";
    awaitingNext = true;
    equalsOperator = false;
    anyOperator = true;
});

divideBy.addEventListener("click", () => {
    if (!num1 && !num2 && (displayVal === '')) {
        return;
    }
    if ((num1 != null) && (!equalsOperator && !anyOperator)) {
        num2 = parseFloat(displayVal);
        displayVal = operate(operator, num1, num2);
        displayUpdate(displayVal);
    }

    if (displayVal === '') displayVal = 0;
    num1 = parseFloat(displayVal);
    operator = "/";
    awaitingNext = true;
    equalsOperator = false;
    anyOperator = true;
});

backspace.addEventListener("click", () => {
    displayVal = displayVal.toString();
    displayVal = displayVal.substring(0, displayVal.length - 1);
    displayUpdate(displayVal);
});

zero.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "0";
    anyOperator = false;
    displayUpdate(displayVal);
});

one.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "1";
    anyOperator = false;
    displayUpdate(displayVal);
});

two.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "2";
    anyOperator = false;
    displayUpdate(displayVal);
});

three.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "3";
    anyOperator = false;
    displayUpdate(displayVal);
});

four.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "4";
    anyOperator = false;
    displayUpdate(displayVal);
});

five.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "5";
    anyOperator = false;
    displayUpdate(displayVal);
});

six.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "6";
    anyOperator = false;
    displayUpdate(displayVal);
});

seven.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "7";
    anyOperator = false;
    displayUpdate(displayVal);
});

eight.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "8";
    anyOperator = false;
    displayUpdate(displayVal);
});

nine.addEventListener("click", () => {
    if (awaitingNext) {
        clearDisplay();
    }
    if (displayVal.length >= 9) {
        return "Error";
    }
    displayVal += "9";
    anyOperator = false;
    displayUpdate(displayVal);
});

equals.addEventListener("click", () => {
    if (num1 != null && operator && !equalsOperator) {
        num2 = parseFloat(displayVal);
        displayVal = operate(operator, num1, num2);
        displayUpdate(displayVal);
        equalsOperator = true;
        anyOperator = false;
    }
});
