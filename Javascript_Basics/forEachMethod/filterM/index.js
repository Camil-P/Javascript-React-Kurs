const nekiNiz = [12, 321, 123123, 65645, 987, 222];

const ispisiNeparne = () => {
    console.log(nekiNiz);
    
    const neparniBr = nekiNiz.filter(el => {
        return el%2 !== 0;
    });

    const parniBr = nekiNiz.filter(e => e%2 === 0);

    neparniBr.forEach(e => console.log(e));
    console.log("-----------------");
    parniBr.forEach(e => console.log(e));
};