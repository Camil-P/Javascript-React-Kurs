const operators = ["/", "+", "*", "-", "%"];

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

const moduo = (firstNumber, secondNumber) => {
    return firstNumber % secondNumber;
}

const calculate = (htmlElement) => {
    let value = htmlElement.value;

    if (operators.includes(value)){
        let firstNumber = document.getElementById("firstNumber").value;
        let secondNumber = document.getElementById("secondNumber").value;

        let result;

        if (value === "-"){
            result = subtract(firstNumber, secondNumber);
        }
        else if (value === "+"){
            result = add(parseInt(firstNumber), parseInt(secondNumber));
        }
        else if (value === "*"){
            result = multiply(firstNumber, secondNumber);
        }
        else if (value === "/"){
            result = divide(firstNumber, secondNumber);
        }
        else if (value === "%"){
            result = moduo(firstNumber, secondNumber);
        }

        document.getElementById("result").innerHTML = result;
    }
    else {
        const body = document.getElementsByTagName("body");

        body[0].innerHTML += `<h1 style="color: blue; text-align: center">Uneli ste nepostojeci operator!</h1>`
    }
};



