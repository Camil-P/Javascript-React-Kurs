function calculate(){
    var inputedNums = document.getElementById("nmbInput").value; // = "2, -3, -4,h 1,h 0"

    var potentialNumberArray = inputedNums.split(", "); // = "["2", "3", "4,h 1,h 0"]

    var unseparatedNumbers = potentialNumberArray[2].split(",h "); // = ["4", "1", "0"]

    var separatedNumberArray = [];
    // separatedNumberArray.push(potentialNumberArray[0]);
    // separatedNumberArray.push(potentialNumberArray[1]);
    // separatedNumberArray.push(unseparatedNumbers[0]);
    // separatedNumberArray.push(unseparatedNumbers[1]);
    // separatedNumberArray.push(unseparatedNumbers[2]);

    // index = index + 1 === index++ === index += 1
    for (let index = 0; index < 5; index++) {
        if (index < 2){
            separatedNumberArray.push(potentialNumberArray[index]);
        }
        else{
            separatedNumberArray.push(unseparatedNumbers[index-2]);
        }
        separatedNumberArray[index] = parseInt(separatedNumberArray[index]);
    }
    // ["2", "3", "4", "1", "0"] je postalo [2, 3, 4, 1, 0]

    // funkcionalnost ispod je u gornjoj for petlji
    // for (let index = 0; index < separatedNumberArray.length; index++) {
    //     separatedNumberArray[index] = parseInt(separatedNumberArray[index]);
    // }

    var positiveNums = 0;
    var negativeNums = 0;
    var zeroNums = 0;

    for (let index = 0; index < separatedNumberArray.length; index++) {
        if (separatedNumberArray[index] > 0){
            positiveNums += 1;
        }
        else if (separatedNumberArray[index] < 0){
            negativeNums += 1;
        }
        else{
            zeroNums += 1;
        }
    }

    // Racunam pozitivan procenat
    var positivePercentage = positiveNums / separatedNumberArray.length;
    positivePercentage = (positivePercentage * 100) + "%";
    // Racunam negativan procenat
    var negativePercentage = negativeNums / separatedNumberArray.length;
    negativePercentage = (negativePercentage * 100) + "%";
    // Racunam procenat nula
    var zeroPercentage = zeroNums / separatedNumberArray.length;
    zeroPercentage = (zeroPercentage * 100) + "%";

    document.getElementById("display").innerHTML = "Positive: " + positivePercentage + "Negative: " + negativePercentage + "Zero: " + zeroPercentage;
}