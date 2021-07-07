const bookData = require("./bookData");
const Book = require("../../domain/schemas/Book");

const bookSeeder = async () => {
  Book.find().countDocuments(async (err, books) => {
    if (err) {
      console.log(err)
    }
    
    if(books === 0) {
      try {
        await Book.deleteMany({});
    
        await Book.insertMany(bookData);
    
        console.log("Data Import Success");
    
        process.exit();
      } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
      }
    }
    else {
      console.log("Books were previously added.")
    }
  });
};

module.exports = bookSeeder;