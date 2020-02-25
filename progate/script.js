const calculatorscreen=document.querySelector(".calculator-screen");

 
const updatescreen = (numbers)=>{
 calculatorscreen.value=numbers
}

const numbers= document.querySelectorAll(".numbers")


numbers.forEach((numbers) => {
    numbers.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updatescreen(currentInput)
    })
})
console.log(numbers)


let prevInput="0"
let calculationOperation=""
let currentInput="0"

const inputNumber = (numbers)=>{
   
    if(currentInput==='0')
    {
        currentInput=numbers
    }
    else{
   currentInput += numbers
    }
}

// oprators

const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
        //console.log(event.target.value)

        
    })
})

const inputOperator= (operator)=>{
    prevInput = currentInput
    calculationOperation =operator
    currentInput='0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener("click",()=>{
    
    calculate()
    updatescreen(currentInput)

})

const calculate=()=>{
    let result=0
    switch(calculationOperation)
    {
        case '+':
            result=parseInt(prevInput)+parseInt(currentInput)
            break
        case '-':
             result=parseInt(prevInput)-parseInt(currentInput)
            break
        case '*':
             result=parseInt(prevInput)*parseInt(currentInput)
             break
        case '/':
            result=parseInt(prevInput)/parseInt(currentInput)
            break
        default:
                return
    }
    currentInput=result.toString()
    calculationOperation=''
}

const clearBtn=document.querySelector('.all-clear')
clearBtn.addEventListener('click',()=>{
    clearAll();
    updatescreen(currentInput)
})
const clearAll=()=>
{
    prevInput='0'
    calculationOperation=''
    currentInput='0'
    
}
