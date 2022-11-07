// function checkProp (prop, obj) {
//     if (obj[prop]) {
//         return true;
//     }

//     return false;
// }

// const user = {
//     id: 'eedw em1op m323 21',
//     name: 0,
//     surname: 'Plojovic',
//     jmbg: '65184831312',
//     password: "kfn sodi m3"
// };

// // const userReduced = 

// const user2 = {
//     name: 'Camil',
//     surname: 'Plojovic',
//     jmbg: '65184831312',
//     nekiProp: 'neku vrednost'
// };

// // user2.nekiNoviProp = '';
// // const noviObj = {...user2, nekiNoviProp };

// const imePropa = 'nekiProp';

// user2[imePropa]

// function renameUser(name, user) {
//     return { ...user, name, surname: 'novo prezime' };
// }

// const userModified = { name: 'sad sdas', ...user2  }

// function removeKey (searchedKey, obj) {
//     const { [searchedKey]: searchedKeyToRemove, ...rest } = obj;
//     console.log(searchedKeyToRemove);
//     return { ...rest };
// }

// console.log("Ovo nas zanima: ", removeKey('jmbg', user2));

// // ['name', 'surname', 'jmbg']

// const { name, surname, jmbg } = user2;

// // const userExtended = { ...user2, adress, phoneNumber }

// const userC = { ...user };

// const [ name1, surname1, jmbg1, ...rest ] = Object.keys(user2);

// const tel = [];
// tel['name'] = 'Camil'

// Object.values(user);
// Object.entries(user2).forEach(([key, value]) => key + value)
// const diffProps = Object.keys(user).filter(p => !Object.keys(user2).includes(p));
// // if (diffProps.length > 0) {
// //     console.log(false);
// // }
// // else{
// //     console.log(true);
// // }


// // console.log(checkProp('name', user));

const nasObj = { 
    prviPro: 'vrednost 1',
    drugiPro: 'vrednost 2',
    treciPro: 'vrednost 3',
    cetPro: 'vrednost 4',
}

const addProp = (obj, prop, value) => {
    obj[prop] = value;
    return obj;
}

const addButDontModify = (obj, prop, value) => {
    return { ...obj, [prop]: value };
}

const removeProp = (obj, prop) => {
    const { [prop]: propToRemove, ...rest } = obj;
    return { ...rest };
}

Object.keys(nasObj).forEach(p => console.log(p));

Object.values(nasObj).forEach(v => console.log(v));

Object.entries(nasObj).forEach(([key, value]) => console.log(key, value) );
