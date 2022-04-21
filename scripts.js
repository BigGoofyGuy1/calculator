let op;
const add = function(num1, num2) {
	let sum = num1 + num2
  return sum
};

const subtract = function(num1, num2) {
	let diff = num1 - num2
  return diff
};

const multiply = function(num1, num2) {
    let product = num1 * num2;
    return product
};

const division = function(num1, num2) {
    let quotient = num1 / num2
    return quotient
};

const operator = function(op, num1, num2) {
    if(op === '+') {
        add(num1, num2)
    }
    
    if(op === '-') {
        subtract(num1, num2)
    }

    if(op === '*') {
        multiply(num1, num2)
    }

    if(op === '/') {
        division(num1, num2)
    }

};

let container = document.getElementById('container')

let total = document.createElement('div')
total.classList = 'total'
total.id = 'total'
total.textContent = 0
container.appendChild(total)

for(let i = 1; i <= 9; i++){
    let buttons = document.createElement('button')
    buttons.classList = 'buttons'
    buttons.id = [i]
    buttons.textContent = [i]
    buttons.addEventListener('click', function(){
        total.textContent = [i]
    })
    container.appendChild(buttons)
}

let clear = document.createElement('button')
clear.classList = 'buttons'
clear.id = 'c'
clear.textContent = 'c'

container.appendChild(clear)


let zero = document.createElement('button')
zero.classList = 'buttons'
zero.id = '0'
zero.textContent = '0'
container.appendChild(zero)

let decimal = document.createElement('button')
decimal.classList = 'buttons'
decimal.id = '.'
decimal.textContent = '.'
decimal.addEventListener('click', function(){
    total.textContent ='0.'
    
})
container.appendChild(decimal)