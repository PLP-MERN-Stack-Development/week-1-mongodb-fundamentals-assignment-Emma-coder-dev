# 📚 PLP Bookstore – MongoDB Week 1 Project

## 🚀 Objective
Learn the fundamentals of MongoDB by:
- Installing and setting up MongoDB locally
- Creating a `plp_bookstore` database and `books` collection
- Performing CRUD operations
- Writing advanced queries with projection, sorting, and pagination
- Creating aggregation pipelines
- Implementing indexing for performance optimization

---

## 🛠️ Tools Required

To run MongoDB locally, make sure you have the following:

### 1. **MongoDB Community Edition**
- The core MongoDB server (`mongod`) and shell (`mongosh`)
- Download: https://www.mongodb.com/try/download/community

### 2. **MongoDB Shell (`mongosh`)**
- Command-line interface to run scripts and interact with the database  
- Comes with MongoDB installation or download separately: https://www.mongodb.com/try/download/shell

### 3. **MongoDB Compass (Optional but recommended)**
- A GUI to visualize collections, run queries, and monitor performance  
- Download: https://www.mongodb.com/try/download/compass

### 4. **Code Editor (for writing scripts)**
- Examples:
  - [Visual Studio Code](https://code.visualstudio.com/)
  - Sublime Text
  - Atom

---

## 📂 Project Files

- `insert_books.js` – JavaScript file to insert at least 10 book documents.
- `queries.js` – MongoDB queries (CRUD, advanced queries, aggregation, indexing).
- `README.md` – This file.
- Screenshot of MongoDB Compass showing your collection and data.

---

## ⚙️ How to Run

### 🖥️ Run with Local MongoDB

1. **Start the MongoDB server**  
   Open a terminal and run:
   mongod
2. **Insert book data into the database**
   In a new terminal window, run:
   mongosh < insert_books.js
3. **Run your queries**
   Run:
   mongosh < queries.js

