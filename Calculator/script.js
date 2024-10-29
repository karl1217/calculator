const body = document.body;
const screen = document.querySelector(".screen");

const zero = document.querySelector("#zero-button");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const percent = document.querySelector("#percent");
const plusMinus = document.querySelector("#plus-minus");


let equation = "";
let result = 0;
let decimalAdded = false;
let negativeSignAdded = false;

//Number buttons
zero.addEventListener("click", () => {
    screen.innerText+= "0";
    clear.innerText = "C";
    equation+="0";
});

one.addEventListener("click", () => {
    screen.innerText+= "1";
    clear.innerText = "C";
    equation+="1";
});

two.addEventListener("click", () => {
    screen.innerText+= "2";
    clear.innerText = "C";
    equation+="2";
});

three.addEventListener("click", () => {
    screen.innerText+= "3";
    clear.innerText = "C";
    equation+="3";
});

four.addEventListener("click", () => {
    screen.innerText+= "4";
    clear.innerText = "C";
    equation+="4";
});

five.addEventListener("click", () => {
    screen.innerText+= "5";
    clear.innerText = "C";
    equation+="5";
});

six.addEventListener("click", () => {
    screen.innerText+= "6";
    clear.innerText = "C";
    equation+="6";
});

seven.addEventListener("click", () => {
    screen.innerText+= "7";
    clear.innerText = "C";
    equation+="7";
});

eight.addEventListener("click", () => {
    screen.innerText+= "8";
    clear.innerText = "C";
    equation+="8";
});

nine.addEventListener("click", () => {
    screen.innerText+= "9";
    clear.innerText = "C";
    equation+="9";
});

//Clear button
clear.addEventListener("click", () => {
    screen.innerText = "";
    clear.innerText = "AC";
    equation = "";
});


//Decimal button
decimal.addEventListener("click", () => {
    if (!decimalAdded) {
        screen.innerText+= ".";
        clear.innerText = "C";
        equation +=".";
        decimalAdded = true;
    }
});

//Equals button
equals.addEventListener("click", () => {
    result = eval(equation);
    screen.innerText = "";
    screen.innerText = result;
    equation = "";
    decimalAdded = false;
});

//Operations
add.addEventListener("click", () => {
    screen.innerText = "";
    equation+="+";
    decimalAdded = false;
});

minus.addEventListener("click", () => {
    screen.innerText = "";
    equation+="-";
    decimalAdded = false;
});

multiply.addEventListener("click", () => {
    screen.innerText = "";
    equation+="*";
    decimalAdded = false;
});

divide.addEventListener("click", () => {
    screen.innerText = "";
    equation+="/";
    decimalAdded = false;
});

/*
//Percent button
percent.addEventListener("click", () => {

});
*/

//Plus-minus button
plusMinus.addEventListener("click", () => {
    if (!negativeSignAdded) {
        screen.innerText = "-" + screen.innerText;
        equation+="-";
        negativeSignAdded = true;
    } else {
        screen.innerText = screen.innerText.replace("-", "");
        negativeSignAdded = false;

    }
});



