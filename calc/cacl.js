class Calculator{
    constructor(prevInput, currentInput){
        this.prevInput = prevInput;
        this.currentInput = currentInput;
        this.clear();
    }
    clear(){
        this.currentoperand = "";
        this.prevoperand = "";
        this.sign = undefined;
        this.currentInput.innerText = "";
        this.prevInput.innerText = "";
    }
    delete(){

    }
    insertNum(number){
        this.currentoperand = this.currentoperand.toString() + number.toString();
    }
    operationOption(operation){
        if (this.prevoperand === "" && operation === "=") return
        if (this.prevoperand !== ""){
            this.sign = this.prevoperand.charAt(this.prevoperand.length-1)
            this.processNum()
        }
        else {
            this.prevInput.innerText = this.currentoperand + " " + operation
            this.prevoperand = this.currentoperand + " " + operation
            this.sign = operation
            this.currentInput.innerText = ""
            this.currentoperand = ""

        }
    }
    processNum(){
        switch (this.sign) {
            case  "+":
                this.currentoperand = parseInt(this.currentoperand,10)+ parseInt(this.prevoperand,10)
                this.currentInput.innerText = this.currentoperand
                this.prevInput.innerText =""
                this.prevoperand = ""
                break;
            case  "-":
                this.currentoperand = parseInt(this.currentoperand,10) - parseInt(this.prevoperand,10)
                this.currentInput.innerText = this.currentoperand
                this.prevInput.innerText =""
                this.prevoperand = ""
                break;
            case  "/":
                this.currentoperand = parseInt(this.prevoperand,10) / parseInt(this.currentoperand,10)
                this.currentInput.innerText = this.currentoperand
                this.prevInput.innerText =""
                this.prevoperand = ""
                break; 
            case  "X":
                this.currentoperand = parseInt(this.currentoperand,10) * parseInt(this.prevoperand,10)
                this.currentInput.innerText = this.currentoperand
                this.prevInput.innerText =""
                this.prevoperand = ""
                break;       
            
        }
    }
    updateNum(){
        this.currentInput.innerText = this.currentoperand
    }
    
}


const numberButton = document.querySelectorAll('[number]');
const operationButton = document.querySelectorAll('[operation]');
const equalButton = document.querySelectorAll('[equal]')[0];
const deleteButton = document.querySelectorAll('[delete]')[0];
const clearButton = document.querySelectorAll('[clear]')[0];
const prevInput = document.querySelectorAll('[previous]')[0];
const currentInput = document.querySelectorAll('[current]')[0];

const calculator = new Calculator(prevInput, currentInput);


numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.insertNum(button.innerText)
        calculator.updateNum()
    })
}); 

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operationOption(button.innerText)
    })
});

equalButton.addEventListener('click',()=>{
    calculator.operationOption(equalButton.innerText)
})

clearButton.addEventListener('click',()=>{
    calculator.clear()
})
