function stringManipulation(string, logString){
    // return logString like a callback function;
    return logString(string)
}

function logStringFunction(string){
    // return the string to upper case when we using string method toUpperCase() -- function;
    return string.toUpperCase()
}

let str = "pw skill"
let result = stringManipulation(str, logStringFunction)
console.log(result);
