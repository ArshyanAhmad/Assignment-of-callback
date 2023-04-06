function getData(){
    // fetch the data from api of jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/posts/')
    
    // first then return the response the data 
    .then((res) => res.json())

    // second then return the data from response of body 
    .then((data) => {
        // put forEach method in data to get the inner data
        data.forEach(item => {
            console.log(item);
        });
    })
    // if detect error then run the catch function
    .catch((error) => console.log(error))
}
// call the function
getData()