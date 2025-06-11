// Find all books in a specific genre (e.g., Fantasy)
db.books.find({ genre: "Fantasy" });

// Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// Update the price of a specific book (e.g., "The Great Gatsby" to 12.99)
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 12.99 } }
);

// Delete a book by its title (e.g., "The Da Vinci Code")
db.books.deleteOne({ title: "The Da Vinci Code" });
  
// Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Projection – return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by price (descending)
db.books.find().sort({ price: -1 });

// Pagination – show 5 books per page (e.g., page 1)
db.books.find().limit(5);

// Pagination – page 2 (skip first 5)
db.books.find().skip(5).limit(5);

// Average price of books by genre
db.books.aggregate([
  { $group: {
    _id: "$genre",
    average_price: { $avg: "$price" }
  }}
]);

// Author with the most books
db.books.aggregate([
  { $group: {
    _id: "$author",
    count: { $sum: 1 }
  }},
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade and count them
db.books.aggregate([
  { $project: {
    decade: { $subtract: [ { $divide: [ "$published_year", 10 ] }, { $mod: [ { $divide: [ "$published_year", 10 ] }, 1 ] } ] }
  }},
  { $group: {
    _id: "$decade",
    count: { $sum: 1 }
  }},
  { $sort: { _id: 1 } }
]);
 
// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Use explain to show performance improvement
db.books.find({ title: "The Hobbit" }).explain("executionStats");
