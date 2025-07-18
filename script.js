const digit = document.querySelector("#digits")
const display = document.querySelector("#display")
const operators = document.querySelector("#operators")
const Operate = document.querySelector("#operate")
const clear = document.querySelector("#Clear")
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

function calculate(){
    let firstNumber = '';
    let secondNumber = '';
    let operator = null;
    let isSecondNumber = false;
    
        digit.addEventListener('click', (event) => {
        if(event.target.className === 'digit'){
            if (!isSecondNumber){
                firstNumber += event.target.innerText;
                display.innerHTML = firstNumber;
            } else {
                secondNumber += event.target.innerText;
                display.innerHTML = secondNumber;
            }
        }
        })

        operators.addEventListener('click', (event) => {
            if(event.target.className === 'operator' && firstNumber !== '') {
                    operator = event.target.innerText;
                    isSecondNumber = true;
            }

            
        })

        Operate.addEventListener('click', (event) => {
            if(event.target.textContent === 'Operate'){
                let operatorF;
                if (operator === 'Add') operatorF = add;
                if (operator === 'Subtract') operatorF = subtract;
                if (operator === 'Multiply') operatorF = multiply;
                if (operator === 'Divide') operatorF = divide;
                let result = operate(Number(firstNumber), Number(secondNumber), operatorF);
                display.innerHTML = result;

                console.log(result)

                firstNumber = '';
                secondNumber = '';
                operator = null;
                isSecondNumber = false;
            }
        })

        clear.addEventListener('click', (event) => {
        if(event.target.textContent === 'Clear'){
            firstNumber = '';
            secondNumber = '';
            operator = null;
            isSecondNumber = false;
            display.innerHTML = '0';
        }
        })
    

}






calculate();
