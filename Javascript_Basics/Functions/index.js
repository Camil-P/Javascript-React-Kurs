// function showDiagonal(){

// }

const checkForNumber = (event) => {
    console.log(event.value);
}

const showDiagonalOnClick = (e) => {
    console.log(e.id);
}

const uradiNestoOnDblClick = (ceoButton) => {
    // Funkcija vraca string koji predstavlja div
    const div = createDiv("red");

    // Upisujemo vraceni div u body
    document.getElementsByTagName("body")[0].innerHTML += div;
}

const createDiv = (color) => {
    const nesto = "dzoni " + color + " camil ";
    const div = `<div style='background-color: ${color}; height: 350px'></div>`
    return div;
}

const createDivOnMouseOver = () => {
    // const body = document.getElementsByTagName("body");
    // console.log(body[0].innerHTML);

    // body[0].innerHTML += `<div class="noviDiv"></div>`;
    // console.log(body[0].innerHTML);
}