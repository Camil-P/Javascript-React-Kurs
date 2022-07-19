const url = "https://faketoreapi.com/products";

// function loadArticles() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url);
//   xhttp.send();
//   xhttp.onload = function () {
//     console.log(JSON.parse(this.responseText));
//   };
// }

// loadArticles();

// const loadUsers = new Promise((resolve, reject) => {
//   const uslov = false;

//   // Ovde je logika za uzimanje podataka sa servera

//   if (uslov) {
//     resolve([12, "Camil", true, { jmbg: "12312312", brLicne: "123124234" }]);
//   } else {
//     reject("Podaci nisu stigli iz nekog razloga");
//   }
// });

// loadUsers.then((value) => console.log(value)).catch((message) => console.log(message));

const load = new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.send();
  xhttp.onload = function () {
    resolve(JSON.parse(this.responseText));
  };
  xhttp.onerror = () => {
    reject(this);
  };
});

load
  .then((value) => console.log(value))
  .then((hahu) => console.log(hahu))
  .catch((message) => console.log(message));

// class Korisnik {
//   //         "Ammar" "DOlovac"
//   constructor(ime, prezime) {
//     this.ime = ime;
//     this.prezime = prezime;
//   }
// }

// const Ammar = new Korisnik("Ammar", "Dolovac");
// const Enesa = new Korisnik("Enesa", "Gudzevic");
// console.log(Ammar.ime);
// console.log(Enesa.prezime);

// load.then((d) => console.log(d)).catch((e) => console.log(e));

// const loadPics = () => {
//   console.log("Ucitane su slike");
// };

// const loadFollowers = () => {
//   console.log("Ucitali su se pratioci");
//   setTimeout(loadPics, 4000);
// };

// var loadUsers = () => {
//   console.log("Ucitali su se korisnici");
//   setTimeout(loadPics, 3000);
//   setTimeout(loadFollowers, 1500);
// };

// setTimeout(loadUsers, 2000);
// setInterval(nekaFunc, 5000);

//             callback funkcija
// const runThis = (otherFunc) => {
//   console.log("Nenormalno zahtebna akcija");
//   otherFunc();
// };

// runThis(() => {
//   console.log("From other func");
// });

// runThis(function () {
//   console.log("From other other functions");
// });

// runThis(nekaFunc);
