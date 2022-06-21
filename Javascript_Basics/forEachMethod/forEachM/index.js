const arr = [12, 321, 2.12, 3211, "nekiString"];

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

arr.forEach((element) => 
console.log("preko forEach-a: ", element));

const add2ThenDisplay = (arrayElement) => {
    console.log(arrayElement + 2);
};

// Za svaki (forEach) element (element) niza (arr) 
// radi nesto (add2ThenDisplay)
arr.forEach((element) => add2ThenDisplay(element));

const ispisiIme = (ime, prezime) => 
    console.log(ime + " " + prezime)

ispisiIme(12, "plojovic");