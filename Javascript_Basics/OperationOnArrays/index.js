const resultArray = [];
const displayEl = document.getElementById("display");

const add = () => {
    let firstArray = document.getElementById("firstIn").value.split(" ");
    let secondArray = document.getElementById("secondIn").value.split(" ");
    
    for (let i = 0; i < firstArray.length; i++) {

        firstArray[i] = parseInt(firstArray[i]);
        secondArray[i] = parseInt(secondArray[i]);

        resultArray.push(firstArray[i] + secondArray[i]);

    }

    display();
}

const subtract = () => {
    let firstArray = document.getElementById("firstIn").value.split(" ");
    let secondArray = document.getElementById("secondIn").value.split(" ");
    
    for (let i = 0; i < firstArray.length; i++) {

        firstArray[i] = parseInt(firstArray[i]);
        secondArray[i] = parseInt(secondArray[i]);

        resultArray.push(firstArray[i] - secondArray[i]);

    }

    display();
}

const multiplay = () => {
    let firstArray = document.getElementById("firstIn").value.split(" ");
    let secondArray = document.getElementById("secondIn").value.split(" ");
    
    for (let i = 0; i < firstArray.length; i++) {

        firstArray[i] = parseInt(firstArray[i]);
        secondArray[i] = parseInt(secondArray[i]);

        resultArray.push(firstArray[i] * secondArray[i]);

    }

    display();
}

const divide = () => {
    let firstArray = document.getElementById("firstIn").value.split(" ");
    let secondArray = document.getElementById("secondIn").value.split(" ");
    
    for (let i = 0; i < firstArray.length; i++) {

        firstArray[i] = parseInt(firstArray[i]);
        secondArray[i] = parseInt(secondArray[i]);

        resultArray.push(firstArray[i] / secondArray[i]);

    }

    display();
}

const moduo = () => {
    let firstArray = document.getElementById("firstIn").value.split(" ");
    let secondArray = document.getElementById("secondIn").value.split(" ");
    
    for (let i = 0; i < firstArray.length; i++) {

        firstArray[i] = parseInt(firstArray[i]);
        secondArray[i] = parseInt(secondArray[i]);

        resultArray.push(firstArray[i] % secondArray[i]);

    }

    display();
}

const display = () => {
    for (let j = 0; j < resultArray.length; j++) {
        displayEl.innerHTML += "<br>" + resultArray[j];
    }
}