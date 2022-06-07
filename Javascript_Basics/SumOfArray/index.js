function calculate(){
    let inputedNumbers = document.getElementById("in").value;

    let numberArray = inputedNumbers.split(",");

    for (let index = 0; index < numberArray.length; index++){
        let parsedNumber = parseInt(numberArray[index]);
        numberArray[index] = parsedNumber;
    }

    let sum = 0;

    for (let index = 0; index < numberArray.length; index++) {

        let predhodnaVrednost = sum;

        sum = predhodnaVrednost + numberArray[index];

        // ovo iznad je jednako ovome ispod
        // sum = sum + numberArray[index];
        
    }

    if(sum > 0){
        
    }

}