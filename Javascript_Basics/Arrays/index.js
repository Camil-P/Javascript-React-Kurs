var a = [0, 1, 2.3, 3, 4, 5.2131, 6, 7.121, 8, 9, 10];
var a0 = 0;
var a1 = 1;
var a2 = 2;
var a3 = 3;
var a4 = 4;
var a5 = 5;
var a6 = 6;
var a7 = 7;
var a8 = 8;

var vrednosti = [];
vrednosti[0] = parseInt(prompt("Unesite vrednost: "));
vrednosti[1] = prompt("Unesite vrednost: ");
vrednosti[2] = prompt("Unesite vrednost: ");
vrednosti[3] = prompt("Unesite vrednost: ");
vrednosti[4] = prompt("Unesite vrednost: ");



var kemal = "Kemal";
var camil = "Camil";

var sveVrednosti = ["Kemal", "Camil", "Kemal", "Kemal", "Camil", "Kemal", "Kemal"];

// pocetakNizaUMemoriji -> 123x12[0] === sveVrednosti[0] === "Kemal"
camil = sveVrednosti[1];

console.log(sveVrednosti);
console.log(sveVrednosti[1]);
sveVrednosti[1] = "Abida";
console.log("Vrednost nakon override-a: ", sveVrednosti[1]);
console.log("Vrednost niza nakon override-a: ", sveVrednosti);

var prviBool = true;
var drugiBool = 12312312 > -123123;

sveVrednosti.push(prviBool === drugiBool);
console.log("Nakon push-a: ", sveVrednosti);
sveVrednosti.pop();
console.log("Nakon pop-a: ", sveVrednosti);

["nesto", true, false, 345324324, "21312"].push(2.5);


