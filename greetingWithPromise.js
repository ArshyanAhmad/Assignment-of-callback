const name = "Sanket"

function greeting(name){
    // return a promise to greet the person
    return new Promise((resolve, reject) => {
        // if name is present then resolve the promise 
        if(name){
            resolve(`Hellow, ${name} sir`)
        }
        // if name is not present then reject the promise 
        else{
            reject(`Name is not defined`)
        }
    })

}

let greet = greeting(name)

greet.then((value)=>{
    // if resolve the promise then print the resolve value 
    console.log(value);
}).catch((error)=>{
    // if reject the promise then print the reject value 
    console.log(error);
})
