var a = prompt("Unesite variablu:");
a = parseInt(a);

console.log(typeof a);
console.log(a);

var nekiUslov = true;
var treciUslov = false;

// Boolova algebra:
// true && true && true || false = true
// 1 * 1 * 1 + 0 = 1

var glavniUslov = typeof a === "number" 
                  && !isNaN(a);

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
