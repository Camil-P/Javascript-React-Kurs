var aritmethicalOperand = prompt("Unesite aritmeticki operator: ");

var a = prompt("Unesite prvi broj: ");
var b = prompt("Unesite drugi broj: ");

a = parseInt(a);
b = parseInt(b);

if(a >= b){
    console.log("Prvo broj " + a + " je veci od " + b);
}

if(a < b){
    console.log("Drugi (b) je veci");
}

if(aritmethicalOperand === "-"){
    console.log("Razlika dva broja je: " + (a - b));
}
else if(aritmethicalOperand === "/"){
    console.log("Kolicnik dva broja je: " + (a / b));
}
else if(aritmethicalOperand === "*"){
    console.log("Proizvod dva broja je: " + (a * b));
}
else{
   console.log("Unet je nepostojeci operand!!!"); 
}