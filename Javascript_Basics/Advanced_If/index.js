var a = prompt("Unesite variablu:");
a = parseInt(a);

// typeof ce da vrati string "number"
console.log(typeof a);
console.log(a);

var nekiUslov = true; // 1
var treciUslov = false; // 0

// Boolova algebra:
// true && true && true || false = true
// 1 * 1 * 1 + 0 = 1

var glavniUslov = typeof a === "number" 
                  && !isNaN(a);

var isANumber = typeof a === "number" && !isNaN(a);

if (isANumber && a%2 === 0){
    console.log("Broj je paran.");
}
else if (isANumber && a%2 !== 0){
    console.log("Broj je neparan.");
}

// BOlji nacin
if(isANumber){

    if(a%2 !== 0){
        console.log("Broj je neparan.");
    }
    else{
        console.log("Broj je paran.")
    }

}

// Ako je ostatak pri deljenju jednak nuli broj je paran.
//      true    i      true    i     true
if (glavniUslov && (a%2 === 0) && nekiUslov){
    console.log("Broj je paran.");
}
// Potrebno je da je jedan tacan (true)
//          true     i   true      ili  false
else if (glavniUslov && (a%2 !== 0) || treciUslov){
    console.log("Broj je neparan.");
}
else{
    console.log("Uneta vrednost nije broj");
}
