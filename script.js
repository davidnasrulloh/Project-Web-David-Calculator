// deklarasi variabel untuk menyimpan nilai
let prevNumber = '' // nilai awal
let calculationOperator = '' // nilai operator
let currentNumber = '0' // nilai skrng atau terbaru
let hasil = ''

// menampilkan ke layar screen

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value= number
}

// mengambil number dari tombol

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
    hasil += number 
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(hasil)
    })
})



// menginputkan operator

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
    hasil += calculationOperator
    updateScreen(hasil)
}


// cekOperator = (operator) => {
//     if(currentNumber.includes('*')){
//         return
//     }
//     currentNumber += operator
// }

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener('click', (event)=>{
        // cekOperator(event.target.value)
        inputOperator(event.target.value)
        
    })
})

// fungsi menghitung
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break;
        default:
            return;
    }
    currentNumber = result
    calculationOperator = ''
    hasil = ''
}

// mengaktifkan tombol =

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// mengaktifkan tombol AC
const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    hasil = ''
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})