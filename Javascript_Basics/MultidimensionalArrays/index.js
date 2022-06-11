var displayArray = () => {
    const firstArray = document.getElementById("in1").value.split(',');
    const secondArray = document.getElementById("in2").value.split(',');
    const thirdArray = document.getElementById("in3").value.split(',');
    const fourthArray = document.getElementById("in4").value.split(',');

    const multiArray = [firstArray, secondArray];
    multiArray.push(thirdArray);
    multiArray[3] = fourthArray;

    // console.log(multiArray[i]);
    // console.log("Duzina parent niza: ", multiArray.length)
    // console.log("Duzina child niza: ", multiArray[i].length)
    let row = "[";
    for (let i = 0; i < multiArray.length; i++) {
        row += "<br>";
        for (let j = 0; j < multiArray[i].length; j++) {
            row += multiArray[i][j] + " ";
        }
    }
    row += "]";
    document.getElementById("display").innerHTML = row;
}


// let array = [1, "sta", true, "mozda"];

// let multiArray = [ [1, 2, ["camil", "ddzoni", true], "dsad"],
//                    [true, 12.32, "dsad"],
//                    [32, false, "kao"] ];

// multiArray[0][2][1] // === "ddzoni"