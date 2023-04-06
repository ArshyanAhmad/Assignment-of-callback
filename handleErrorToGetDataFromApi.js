
function getData_Error() {
    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
        // return response
        .then((res) => {
            // if res.ok is not true then throw a new error 
            if (!res.ok) {
                throw new Error("Network response was not ok.")
            }
            return res.json()
        })

        // return data  
        .then((data) => {
            console.log(data);
        })
        // return catch function
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error);
        })
}

getData_Error()