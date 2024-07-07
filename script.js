const add = function(x,y){
    return parseInt(x) + parseInt(y);
}
const subtract = function(x,y){
    return x - y;
}

const multiply = function(x,y){
    return x*y;
}
const divide = function(x,y){
    if(y === 0){
        return "Go fuck yourself";
    }
    else{
        return x / y;
    }
}

let operater, num1, num2;

const operate = function(operater, num1, num2){
    switch(operater){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
                break;
        case "*":
            return multiply(num1,num2);
            break;
    }
}

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplyBy = document.querySelector("multiply");
const divideBy = document.querySelector("#divide");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelectorAll("#three");
const four = document.querySelectorAll("#four");
const five = document.querySelectorAll("#five");
const six = document.querySelectorAll("#six");
const seven =document.querySelectorAll("#seven");
const eight = document.querySelectorAll("#eight");
const nine = document.querySelectorAll("#nine");

const decimal = document.querySelectorAll("#decimal");
const clear = document.querySelectorAll("#clear");
const backspace = document.querySelectorAll("#backspace");
const display = document.querySelector(".screen");

const equals = document.querySelectorAll("#equals");