const url = "https://api.github.com/users/";
const numberUrl = "https://numbersapi.p.rapidapi.com/";

const displayUser = (data) => {
  console.log(data);
  const el = document.getElementById("card");

  el.innerHTML = data;
  //   el.innerHTML = `<img src="${data.avatar_url}">
  //                     <h1>${data.bio}</h1>
  //                     <h1>${data.name}</h1>
  //                     <h1>${new Date(Date.parse(data.created_at))}</h1>`;
};

const handleInput = () => {
  const username = document.getElementById("username").value;

  loadUser(username).then(displayUser).catch(console.log);
};

const loadUser = (user = "7/24") =>
  new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?on=%E3%82%B7%E3%83%B3"
    );
    xhttp.setRequestHeader(
      "X-RapidAPI-Key",
      "ac602fb9a7msh43d1a036da9742cp143ba0jsn02c2f5ba4c39"
    );
    xhttp.setRequestHeader("X-RapidAPI-Host", "kanjialive-api.p.rapidapi.com");

    xhttp.send();
    xhttp.onload = function () {
      resolve(this.responseText);
    };
    xhttp.onerror = function () {
      reject("Zahtev nije uspesno izvrsen");
    };
  });

loadUser()
  .then(displayUser)
  .catch((message) => console.log(message));

// console.log("ispod then-a");
