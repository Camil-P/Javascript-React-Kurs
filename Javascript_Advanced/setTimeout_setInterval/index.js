
const timeoutId = setTimeout(konzolLogujemo, 3000, "Dzoni", "Glisovic");
console.log("nesto");
// clearInterval(timeoutId);

function konzolLogujemo(ime, prezime) {
    console.log(`Ja sam ${ime} ${prezime}`);
};

let counter = 0;

const increment = (prviBr, dr, tr) => {
    counter += prviBr + dr + tr;
    console.log(counter);
}

const intervalId = setInterval(() => increment(), 1000, 0.1, 0.1, 0.1);

const stop = () => {
    clearInterval(intervalId);
};

const div = document.getElementById("div");

setInterval(() => {
    const color = div.style.backgroundColor;
    if(color === "crimson"){
        div.style.backgroundColor = "green";
    }
    else{
        div.style.backgroundColor = "crimson";
    }
}, 3000);