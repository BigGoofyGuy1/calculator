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
        result = add(num1, num2)
        total.textContent = result
        return result;
    }
    
    if(op === '-') {
        result = subtract(num1, num2)
        total.textContent = result
        return result;
    }

    if(op === '*') {
        result = multiply(num1, num2)
        total.textContent = result
        return result;
    }

    if(op === '/') {
        result = division(num1, num2)
        total.textContent = result
    }
    
};

let container = document.getElementById('container')

let total = document.createElement('div')
total.classList = 'total'
total.id = 'total'
let displayValue = 0;
total.textContent = displayValue

container.appendChild(total)
let arr=[]
for(let i = 1; i <= 9; i++){
    let buttons = document.createElement('button')
    buttons.classList = 'buttons'
    buttons.id = [i]
    buttons.textContent = [i]
    buttons.addEventListener('click', function(){
        displayValue = [i]
        arr.push(displayValue)
        total.textContent = arr.join('')
        console.log(total.textContent)
    })
    container.appendChild(buttons)
}

let clear = document.createElement('button')
clear.classList = 'buttons'
clear.id = 'c'
clear.textContent = 'c'
clear.addEventListener ('click', function(){
    console.clear()
    displayValue = 0
    arr = []
    total.textContent = displayValue
    console.log(displayValue)
})
container.appendChild(clear)


let zero = document.createElement('button')
zero.classList = 'buttons'
zero.id = '0'
zero.textContent = '0'
zero.addEventListener('click', function(){
    arr.push('0')
    total.textContent = arr.join('')
    console.log(total.textContent)
})
container.appendChild(zero)

let decimal = document.createElement('button')
decimal.classList = 'buttons'
decimal.id = 'decimal'
decimal.textContent = '.'
decimal.addEventListener('click', function(){
})
container.appendChild(decimal)

let plusOp = document.createElement('button')
plusOp.classList = 'opButtons'
plusOp.id = 'plus'
plusOp.textContent = '+'
plusOp.addEventListener('click', function(){
    console.clear()
    let temp = arr.join('')
    num1 = parseInt(temp)
    displayValue = 0
    op = '+'
    arr = []
    total.textContent = displayValue
})
container.appendChild(plusOp)

let subOp = document.createElement('button')
subOp.classList = 'opButtons'
subOp.id = 'subtract'
subOp.textContent = '-'
subOp.addEventListener('click', function(){
    console.clear()
    let temp = arr.join('')
    num1 = parseInt(temp)
    displayValue = 0
    op = '-'
    arr = []
    total.textContent = displayValue
})
container.appendChild(subOp)

let multiplyOp = document.createElement('button')
multiplyOp.classList = 'opButtons'
multiplyOp.id = 'multiply'
multiplyOp.textContent = '*'
multiplyOp.addEventListener('click', function(){
    console.clear()
    let temp = arr.join('')
    num1 = parseInt(temp)
    displayValue = 0
    op = '*'
    arr = []
    total.textContent = displayValue
})
container.appendChild(multiplyOp)

let equalsOp = document.createElement('button')
equalsOp.classList = 'opButtons'
equalsOp.id = 'equals'
equalsOp.textContent = '='
equalsOp.addEventListener('click', function(){
    num2 = parseInt(arr.join(''))
    let temp = operator(op, num1, num2)
    num1 = temp
    return num1;
})
container.appendChild(equalsOp)