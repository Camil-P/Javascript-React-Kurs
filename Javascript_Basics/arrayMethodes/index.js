const numberArray1 = [1, 23, 1231, -321, -12, 0, 5, 6];
const numberArray2 = [32, -13, 0.12, 32, 123];

const findShorterArrayLength = (arr1, arr2) => {
    let shorterArrayLength;
    if(arr1.length > arr2.length) {
        shorterArrayLength = arr2.length;
    } 
    else {
        shorterArrayLength = arr1.length;
    }
    return shorterArrayLength;
}

const addArrays = () => {
    let sumArray = [];
    let length = findShorterArrayLength(numberArray1, numberArray2);
    for (let i = 0; i < length; i++) {
        sumArray.push(parseInt(numberArray1[i]) + parseInt(numberArray2[i]));
    }
    
    if (numberArray1.length < numberArray2.length){
        for (let j = length; j < numberArray2.length; j++) {
            sumArray.push(numberArray2[j]);
        }
    }
    else{
        for (let j = length; j < numberArray1.length; j++) {
            sumArray.push(numberArray1[j]);
        }
    }

    console.log(sumArray);
}