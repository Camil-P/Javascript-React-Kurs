// class Person {
//     constructor(name, surname, party){
//         this.name = name;
//         this.surname = surname;
//         this.party = party;
//         this.fullName = this.returnFullName();
//     }

//     returnFullName = () => this.name + " " + this.surname;

//     giveFullName(){
//         console.log(this.fullName);
//     }

//     introduce(greeting){
//       console.log(this.name + " " + this.surname + greeting);
//     }
// }

// const camil = new Person("Camil", "Plojovic");

// camil.introduce(" je selam ");
// camil.giveFullName();


// class T_shirt {
//   //              XL                  green           denim
//   constructor(sizeFromArgument, colorFromArgument, materialFromArgument) {
//     this.size = sizeFromArgument;
//     this.color = colorFromArgument;
//     this.material = materialFromArgument;
//   }

// }

// const sizePolo = "XL";
// const colorPolo = "green";
// const materialPolo = "denim";

// const sizeV_neck = "XL";
// const colorV_neck = "green";
// const materialV_neck = "denim";

// const poloTshirt = new T_shirt("XL", "green", "denim");

// const poloTshirt2 = {
//   size: "L",
//   color: "red",
//   material: "coton",
//   metoda:  () => {
//     // telo metode
//     // .
//     // .
//     // .
//   },
// };

// console.log(poloTshirt.size);
// console.log(poloTshirt.color);
// console.log(poloTshirt.material);
// console.log(poloTshirt2.size);
// console.log(poloTshirt2.color);
// console.log(poloTshirt2.material);

const submit = () => {
    console.log("pozivam se");
    const nekaOsoba = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        party: document.getElementById("party").value,
    }

    console.log(nekaOsoba);
    console.table(nekaOsoba);
}
