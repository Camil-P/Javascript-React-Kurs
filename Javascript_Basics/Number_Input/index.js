var niz = [];
niz[0] = parseInt(prompt("Unesite clan: "));
niz[1] = parseInt(prompt("Unesite clan: "));
niz[2] = parseInt(prompt("Unesite clan: "));
niz[3] = parseInt(prompt("Unesite clan: "));
niz[4] = parseInt(prompt("Unesite clan: "));

var areNumbersAnArray = [];
//                                                      isn't NaN
areNumbersAnArray[0] = typeof niz[0] === "number" && !isNaN(niz[0]);
areNumbersAnArray[1] = typeof niz[1] === "number" && !isNaN(niz[1]);
areNumbersAnArray[2] = typeof niz[2] === "number" && !isNaN(niz[2]);
areNumbersAnArray[3] = typeof niz[3] === "number" && !isNaN(niz[3]);
areNumbersAnArray[4] = typeof niz[4] === "number" && !isNaN(niz[4]);

var mainCondition = areNumbersAnArray[0] 
                    && areNumbersAnArray[1] 
                    && areNumbersAnArray[2] 
                    && areNumbersAnArray[3] 
                    && areNumbersAnArray[4]; 

// Provera da li su svi unosi slova



if(areNumbersAnArray[0] 
    && areNumbersAnArray[0] 
    && areNumbersAnArray[0] 
    && areNumbersAnArray[0] 
    && areNumbersAnArray[0]){
        console.log("Inputs are numbers");
    }

else if(!mainCondition){
    console.log("At least one input is a string");
}

// else if(uslov za proveru)

