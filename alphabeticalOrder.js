const book = [
    {
        title: "About a Boy",
        author: "James Cameroon",
        year: "2002"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: "2005"
    },
    {
        title: "Know My Name",
        author: "Chanel Miller",
        year: "1502"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "2012"
    },
    {
        title: "The Graveyard Book",
        author: "Neil Gaiman",
        year: "2002"
    },
    {
        title: "City of Girls",
        author: "Elizabeth Gilbert",
        year: "2302"
    },
    {
        title: "Lock Every Door",
        author: "by Riley Sager",
        year: "2102"
    },
    {
        title: "Ask Again, Yes",
        author: "Mary Beth Keane",
        year: "2022"
    },
    {
        title: "Strange the Dreamer",
        author: "Laini Taylor",
        year: "2021"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: "2212"
    },
]

// take a book that accept list of object [title, author, year]
function takeBook(book, callback){
    // return the callback to short the title
    return callback(book)
}

function shortTitle(object){
    let title = object.map((item) => {
        return item.title
    })

    // short the title when we using of sort() method its short in alphabetical order [a b c d e f g] and return 
    title = title.sort()
    return title
}

// short title store in variable result
let result = takeBook(book, shortTitle)
console.log(result); // print the result

