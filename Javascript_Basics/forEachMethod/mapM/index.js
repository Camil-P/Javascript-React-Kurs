const uradi = () => {
    const nekiNizStringova = ["12312", "23", "0.58", "321"];
    
    const nekiNizBrojeva = nekiNizStringova.map((element) => {
        return Math.round(parseInt(element));
    });
    
    nekiNizStringova.forEach(element => console.log(element));
    nekiNizBrojeva.forEach(element => console.log(element));
}