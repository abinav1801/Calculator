let display = document.querySelector('.answer-box');
let buttons = document.querySelectorAll('.tools');
let delBtn = document.querySelector('.del-box');
let clearBtn = document.querySelector('.reset');
let equalBtn = document.querySelector('.equal');

let currentInput = '';

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let value = e.target.innerText;
        if (value === '.') {
            let lastNumber = currentInput.split(/[+\-*/]/).pop();
            if (lastNumber.includes('.')) return;
        }

        currentInput += value;
        display.innerText = currentInput;
    });
});

equalBtn.addEventListener('click', function(){
    try{
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    }
    catch{
        display.innerText = 'Error';
        currentInput = '';
    }
});

clearBtn.addEventListener('click', function(){
    currentInput = '';
    display.innerText = '0';
});

delBtn.addEventListener('click', function(){
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
});

document.addEventListener('keydown', function(e){
    let key = e.key;
    if(
        (key >= '0' && key <= '9') ||
        key === '+' || key === '-' || key === '*' || key === '/'
    ){
        currentInput += key;
        display.innerText = currentInput;
    }
    else if(key === '.'){
        let lastNumber = currentInput.split(/[+\-*/]/).pop();
        if (lastNumber.includes('.')) return;

        currentInput += '.';
        display.innerText = currentInput;
    }
    else if(key === 'Enter'){
        try{
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        }
        catch{
        display.innerText = 'Error';
        currentInput = '';
        }
    }
    else if(key === 'Backspace'){
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || '0';
    }
    else if(key === 'Escape'){
        currentInput = '';
        display.innerText = '0';
    }
});