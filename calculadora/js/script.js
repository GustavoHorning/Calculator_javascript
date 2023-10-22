const inputNumber1 = document.querySelector('[name="number1"]');
const inputNumber2 = document.querySelector('[name="number2"]');


const btnPlus = document.querySelector("#btn-plus");

const resultBox = document.querySelector("#result-box");

btnPlus.addEventListener("click",handleBtnPlusClick);


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



function handleBtnPlusClick(event) {
    const number1 = Number(inputNumber1.value);
    const number2 = Number(inputNumber2.value);
    const querySelectorNumber1 = document.querySelector("#number1");
    const querySelectorNumber2 = document.querySelector("#number2");
    querySelectorNumber1.classList.remove("input-error");
    querySelectorNumber2.classList.remove("input-error");

    if (!isNumber(number1) && !isNumber(number2)) {
        querySelectorNumber1.classList.add("input-error");
        querySelectorNumber2.classList.add("input-error");
    }
    else if (!isNumber(number1)) {
        querySelectorNumber1.classList.add("input-error");
    }
    else if (!isNumber(number2)) {
        querySelectorNumber2.classList.add("input-error");
    }
    else {
        querySelectorNumber1.classList.remove("input-error");
        querySelectorNumber2.classList.remove("input-error");
    }
    const total = number1 + number2;
    resultBox.innerHTML = total;
}

const btnTimes = document.querySelector("#btn-times");
btnTimes.addEventListener("click",handleBtnTimesClick);

function handleBtnTimesClick(event) {
    const number1 = Number(inputNumber1.value);
    const number2 = Number(inputNumber2.value);
    const querySelectorNumber1 = document.querySelector("#number1");
    const querySelectorNumber2 = document.querySelector("#number2");
    querySelectorNumber1.classList.remove("input-error");
    querySelectorNumber2.classList.remove("input-error");

    if (!isNumber(number1) && !isNumber(number2)) {
        querySelectorNumber1.classList.add("input-error");
        querySelectorNumber2.classList.add("input-error");
    }
    else if (!isNumber(number1)) {
        querySelectorNumber1.classList.add("input-error");
    }
    else if (!isNumber(number2)) {
        querySelectorNumber2.classList.add("input-error");
    }
    else {
        querySelectorNumber1.classList.remove("input-error");
        querySelectorNumber2.classList.remove("input-error");
    }
    const total = number1 * number2;
    resultBox.innerHTML = total;
}

const btnClear = document.querySelector("#btn-clear");

btnClear.addEventListener("click",handleBtnClearClick);

function handleBtnClearClick(event) {
    inputNumber1.value = " ";
    inputNumber2.value = " ";
    resultBox.innerHTML = 0;
}


inputNumber1.addEventListener("input", function() {
    const valorDigitado = inputNumber1.value[0];

    // Verifica se o valor digitado é um número válido
    if (isNaN(valorDigitado)) {
        // Se não for válido, limpa o valor
        inputNumber1.value = '';
        alert("Digite um valor válido");
        
    }
});

inputNumber2.addEventListener("input", function() {
    const valorDigitado = inputNumber2.value[0];

    // Verifica se o valor digitado é um número válido
    if (isNaN(valorDigitado)) {
        // Se não for válido, limpa o valor
        inputNumber2.value = '';
        alert("Digite um valor válido");
        
    }
});


