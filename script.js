const numberButtons = document.querySelectorAll('.buttons__number');
const operatorsButtons = document.querySelectorAll('.buttons__operator');
const mathSign = document.querySelector('.screen__sign');
const equalSign = document.querySelector('.buttons__equal');
const reset = document.querySelector('.buttons__reset');
const del = document.querySelector('.buttons__del');
const currentNumber = document.querySelector('.screen__result');
const previousNumber = document.querySelector('.screen__previous');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

let result = "";

function displayNumbers () {
    if (result && currentNumber.innerHTML == result) {
      currentNumber.innerHTML = '';
      previousNumber.innerHTML = '';
      mathSign.innerHTML = '';
      result = '';
    }
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '';
    if(previousNumber.innerHTML === 'SORRY, ERROR!'){
        currentNumber.innerHTML = '';
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
        result = '';
    }

    switch (true) {
        case currentNumber.innerHTML.length >= 12:
          currentNumber.style.fontSize = '25px';
        break;  
        default:
          currentNumber.style.fontSize = '40px';
          break;
      }

    currentNumber.innerHTML += this.textContent
  }

function operate () {
    if(previousNumber.innerHTML !== 'SORRY, ERROR!'){
    mathSign.innerHTML = this.textContent;
    previousNumber.innerHTML = currentNumber.innerHTML;
    currentNumber.innerHTML = '';}

}

function showResult () {
let a = Number(currentNumber.innerHTML);
let b = Number(previousNumber.innerHTML);
let operator = mathSign.innerHTML;

if(previousNumber.innerHTML === '' && currentNumber.innerHTML === '') return;

switch(operator) {
case "+":
result = a + b;
break;
case "-":
result = b - a;
break;
case "x":
result = a * b;
break;
case "/":
    if (a !== 0 ) {
        result = b / a;
      } else {
        result = 'SORRY, ERROR!';
      }
break;
};
currentNumber.innerHTML = result;
previousNumber.innerHTML = '';
mathSign.innerHTML = '';
}
clearAll = () => {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    result = '';
}

deleteLast = () => {
    currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1)
}

document.querySelector('body').classList.remove('first')
document.querySelector('body').classList.remove('third')
first.addEventListener('click', function() {
    document.querySelector('body').classList.remove('first')
    document.querySelector('body').classList.remove('third')
});

second.addEventListener('click', function() {
    document.querySelector('body').classList.add('first');
    document.querySelector('body').classList.remove('third')

});
third.addEventListener('click', function() {
    document.querySelector('body').classList.add('third')

})

numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));
operatorsButtons.forEach((button) => button.addEventListener('click', operate));
equalSign.addEventListener('click', showResult);
reset.addEventListener('click', clearAll);
del.addEventListener('click', deleteLast)