function doSomething(){

    // Uzimamo HTML elemente
    var input = document.getElementById("in").value;
    var displayPElement = document.getElementById("display");
    var testInput = document.getElementById("test").value;

    // Unosimo vrednost iz inputa u drugi input
    testInput = input;

    // Ispisujemo vrednost HTML elementa
    console.log(input.value);

    // Prikaz u P element
    displayPElement.innerHTML = input.value;
}



