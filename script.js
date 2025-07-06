const digit = document.querySelector("#digits")
const display = document.querySelector("#display")
let number;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y, operation){
    return operation(x, y);
}

digit.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        display.innerHTML = event.target.innerText;
        number = event.target.innerText;
    }
})


let result = operate(5, 10, add)
