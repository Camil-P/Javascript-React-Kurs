var a = prompt("Unesite prvu varijablu:");
a = parseInt(a);

var b = prompt("Unesite drugu varijablu:");
b = parseInt(b);

var operator = prompt("Unesite operator:");

var mainCondition = typeof a === "number" && typeof b === "number"
                    && !isNaN(a) && !isNaN(b);



if (mainCondition){
    var result;
    if (operator === "-"){
        result = a - b;
    }
    else if (operator === "+"){
        result = a + b;
    }
    // ovde vi pisete
    else{
        console.log("Uneli ste nepostojeci operand");
    }
    console.log(result);
}


