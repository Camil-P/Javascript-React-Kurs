function doSomething(){

    // Uzimamo HTML elemente
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    
    var displayElement = document.getElementById("display");

    if (firstNumber === secondNumber){
        displayElement.innerHTML = "Elementi su jednaki";
    }
    else{
        displayElement.innerHTML = "Elementi nisu jednaki";
    }

    // // Unosimo vrednost iz inputa u drugi input
    // testInput = input;

    // // Ispisujemo vrednost HTML elementa
    // console.log(input.value);

    // // Prikaz u P element
    // displayPElement.innerHTML = input.value;
}


