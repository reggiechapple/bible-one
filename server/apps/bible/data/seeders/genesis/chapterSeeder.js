const Book = require("../../domain/schemas/Book");
const Chapter = require("../../domain/schemas/Chapter");

const seeder = {};

seeder.chapterImporter = (bookName, chapterCount) => {
  // find book
  Book.findOne({ title: bookName }).populate("chapters").exec((err, book) => {
    if (err) {
      console.log(err);
    }
    else {
      // create chapters with loop
      let chapters = [];

      for (let index = 1; index < chapterCount + 1; index++) {
        chapters.push({
          chapterNo: index,
          book: book._id
        });
      }
      // console.log(chapters);
      Chapter.find().countDocuments(async (err, chaps) => {
        if (err) {
          console.log(err)
        }

        if (chaps === 0) {
          try {
            await Chapter.deleteMany({});

            await Chapter.insertMany(chapters);

            console.log("Chapter Import Success");

            process.exit();
          } catch (error) {
            console.error("Error with chapter import", error);
            process.exit(1);
          }
        }
        else {
          console.log("Chapters were previously added.")
        }
      });
    }
  });

};

seeder.chaptersToBook = (bookName) => {
  // find book
  Book.findOne({ title: bookName }).populate("chapters").exec((err, book) => {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(chapters);
      Chapter.find().countDocuments(async (err, chaps) => {
        if (err) {
          console.log(err)
        }
        if (chaps > 0 && book.chapters.length === 0) {
            
          Chapter.find({ book: book._id }, (err, chapters) => {
            console.log(typeof(chapters))
            if (err) {
              console.log(err);
            }
            else {
              chapters.forEach(chap => {
                book.chapters.push(chap._id);
              }); 
              book.save();
            }
          });
          console.log("Chapters added to book");
          
        }
        else {
          console.log("Chapters were previously added.")
        }
      });
    }
  });

};

module.exports = seeder;