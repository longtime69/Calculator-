const btns = document.querySelector("#btns")
const display = document.querySelector("#display")
const Operator = document.querySelector(".operator")
const Operate = document.querySelector("#operate")
const clear = document.querySelector("#Clear")

let previousNumber = '';
let currentNumber = '';
let operator = null;
let isCurrentNumber = false;
let resultDisplayed = false;

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

function operate(previousNumber, currentNumber, operation){
    let x = Number(previousNumber);
    let y = Number(currentNumber);

    if (operation === '+'){
        return add(x,y);
    } else if (operation === '-'){
        return subtract(x,y);
    } else if (operation === '*'){
        return multiply(x,y);
    } else if (operation === '/'){
        return divide(x,y);
    } else {
        return 'ERROR'
    }
}

function calculate(){
    
    
        btns.addEventListener('click', (event) => {
        if(event.target.className === 'digit'){
            if(resultDisplayed && !isCurrentNumber){
                currentNumber = '';
                previousNumber = '';
                operator = null;
                isCurrentNumber = false;
                display.innerHTML = '';
                resultDisplayed = false;
            }
            if (!isCurrentNumber){
                previousNumber += event.target.innerText;
                display.innerHTML = previousNumber;
            } else {
                currentNumber += event.target.innerText;
                display.innerHTML = currentNumber;
            }
        }
        })

        btns.addEventListener('click', (event) => {
            if(event.target.className === 'operator' && previousNumber !== '') {
                if(isCurrentNumber && currentNumber != ''){
                    let result = operate(previousNumber, currentNumber, operator);
                    previousNumber = result.toString();
                    display.innerHTML = previousNumber;
                    currentNumber = '';
                }
            
                operator = event.target.innerText;
                isCurrentNumber = true;
                resultDisplayed = false;
            }

            
        })

        /*
        Operator.addEventListener('click', (event) => {
            if(event.target.textContent === '+' || event.target.textContent === '-' || event.target.textContent === '*' || event.target.textContent === '/'){
                if(firstNumber != '' && secondNumber != ''){
                    
                }
            }
        })
            */

        Operate.addEventListener('click', (event) => {
            if(event.target.textContent === '='){
               let result = operate(previousNumber, currentNumber, operator)
                display.innerHTML = result;

                console.log(result)

                previousNumber = result.toString();
                currentNumber = '';
                operator = null;
                isCurrentNumber = false;
                resultDisplayed = true;
            }
        })

        clear.addEventListener('click', (event) => {
        if(event.target.textContent === 'C'){
            previousNumber = '';
            currentNumber = '';
            operator = null;
            isCurrentNumber = false;
            display.innerHTML = '0';
            resultDisplayed = false;
        }
        })
    

}






calculate();
