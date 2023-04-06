const todoApi = 'https://jsonplaceholder.typicode.com/todos/1'
const postApi = 'https://jsonplaceholder.typicode.com/posts/1'


async function getDatas(todoApi, postApi) {

    // return the response of the data
    let todoResponse = await fetch(todoApi)
    // store the data in todoData
    let todoData = await todoResponse.json()
    
    // return the response of the data
    let PostResponse = await fetch(postApi)
    // store the data in postData
    let postData = await PostResponse.json()

    // create object and set key is todoData value is postData
    const obj = {
        todoData,
        postData
    }
    
    // log the object
    console.log(obj);
}

// call the function
getDatas(todoApi, postApi)

