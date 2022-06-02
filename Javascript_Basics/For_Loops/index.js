function add5(){
    var pElement = document.getElementById("display");

    var index;
    for(index=0; index<5; index += 1){
        pElement.innerHTML += index+1;
    }

    // pElement.innerHTML += 1;
    // pElement.innerHTML = pElement.innerHTML + 2;
    // pElement.innerHTML = pElement.innerHTML + 3;
    // pElement.innerHTML = pElement.innerHTML + 4;
    // pElement.innerHTML = pElement.innerHTML + 5;
}