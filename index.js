const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
//making sure it loads after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

const bookStoreTitle = document.getElementById('header');

//getting the book store name
bookStoreTitle.textContent = bookStore.name;

//getting the book list
const bookList = document.getElementById('book-list');//stupid "-" making this take WAY LONGER THAN IT SHOUD HAVE BEEN

//changing the book list stuff for each book to be what is here already.
bookStore.books.forEach((book) => {
    //creating the book container and its elements
    const bookContainer = document.createElement('li');
    console.log('created elements for:', book.title);

        const bookTitle = document.createElement('h3');
            bookTitle.textContent = book.title;
                bookContainer.appendChild(bookTitle);

    //creating the author and image elements
    const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `by ${book.author}`;
                bookContainer.appendChild(bookAuthor);


    const bookImage = document.createElement('img');
            bookImage.src = book.imageUrl; 
            bookImage.alt = `${book.title} cover image`;
                bookContainer.appendChild(bookImage);

    bookList.appendChild(bookContainer);


});

});