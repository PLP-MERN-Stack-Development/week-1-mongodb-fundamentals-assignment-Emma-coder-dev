use('plp_bookstore')

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 10.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 14.5,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 15.0,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 9.99,
    in_stock: false,
    pages: 279,
    publisher: "T. Egerton"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 11.5,
    in_stock: true,
    pages: 214,
    publisher: "Little, Brown and Company"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 19.99,
    in_stock: true,
    pages: 309,
    publisher: "Bloomsbury"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 13.75,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    published_year: 2003,
    price: 16.99,
    in_stock: false,
    pages: 454,
    publisher: "Doubleday"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 18.0,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  }
]);
