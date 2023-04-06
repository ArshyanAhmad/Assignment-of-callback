
// // api store in a variable name is apikey
// const apiKey = 'https://jsonplaceholder.typicode.com/todos/'

// function getData(key) {
//     // fetch the data from jsonplaceholder typicode
//     let fetchData = fetch(key)

//     // first then return the response if response in json then return the response in response.json() 
//     fetchData.then((res) => res.json())

//         // second then return the all data in their response of body
//         .then((data) => {

//             // put the forEach method in data to detect the data and store in the item variable
//             data.forEach(item => {

//                 // if item.id is less or equal to 5 then log the item
//                 if (item.id <= 5) {
//                     console.log(item);
//                     // console.log(item.title);
//                     // console.log(item.id);
//                 }

//             });

//         })

//         // if something is error detected then return the catch statement (network issue)
//         .catch((err) => console.log(`something is missing ${err}`))

// }

// // finally call the getData function
// getData(apiKey)



// ----------------------------------------------------------------------//

// create a variable to store the api key
const apiKey = 'https://jsonplaceholder.typicode.com/todos/'

// create a async function
async function getData(url) {
    // await the response of data 
    let response = await fetch(url)
    // store the data in the data varable
    let data = await response.json()
    // return the data 
    return data
}

getData(apiKey)
    // log the data and put the forEach method in the data to get the inner value
    .then((data) => {
        data.forEach(item => {
            // if item.id is less than or equal to 5 then log the item data
            if (item.id <= 5) {
                console.log(item);
            }
        });
    })
    // if error then return the error 
    .catch((err) => console.log(err))
