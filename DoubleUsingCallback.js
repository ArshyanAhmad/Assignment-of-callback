function parseFunction(array, callback) {
    // callback function
    return callback(array);
}

function callbackFunction(array) {
    // return new array with the number is double ;
    let arr2 = array.map(e =>{
        return e * e
    })
    return arr2
}

let arr = [3, 4, 5, 6, 7, 8];
let result = parseFunction(arr, callbackFunction);
console.log(result);