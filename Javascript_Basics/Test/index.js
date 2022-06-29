








// Niz u kojem smestamo unete elemente
var inputs = [];
const displayEl = document.getElementById("display");

const handleClick = () => {
    // Uzimamo vrednosti iz input
    const input = document.getElementById("in");
    const inputValue = input.value;

    // Smestamo ih u niz
    inputs.push(inputValue);

    // Proveravamo da li broj ispunjava uslov da bude FizzBuzz broj
    if (inputValue % 3 === 0 && inputValue % 5 === 0){
        console.log("tu sam");
        // Ako je broj FizzBuzz onda sve unete clanove proveravamo i modifikujemo
        // unutar funkcije addFizzBuzzToInputs() i vracamo modifikovani niz
        const inputsToDisplay = addFizzBuzzToInputs();

        // Prolazimo kroz vraceni modifikovani niz da bi prikazali element po element
        // unutar p elementa (imamo samo jedan argument i pa nam ne trebaju zagrade, 
        // takodje imamo samo jednu liniju koda pa nam ne trebaju viticaste {} zagrade) 
        inputsToDisplay.forEach(i =>
            displayEl.innerHTML += i);
    }

    input.value = "";
};

const addFizzBuzzToInputs = () => {

    // Mapiramo niz u koji cuvamo inpute kako bi modifikovali elemente i dodali im
    // Fizz/Buzz/FizzBuzz ukoliko je uslov ispunjen. Nakon toga sa returnom vracamo ceo niz
    return inputs.map(i => {

        if ((i % 3 + i % 5) === 0){
            return `<span style="color: green;"><b>${i}  - FizzBuzz</b></span>`;
        }
        else if (i % 3 === 0){
            return `<span style="color: crimson;"><b>${i}  - Fizz</b></span> <br>`;
        }
        else if (i % 5 === 0){
            return `<span style="color: blue;"><b>${i}  - Buzz</b></span> <br>`;
        }
        else {
            return i + "<br>";
        }

    });

}