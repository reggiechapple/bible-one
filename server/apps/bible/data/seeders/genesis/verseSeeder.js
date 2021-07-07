const Book = require("../../domain/schemas/Book");
const Chapter = require("../../domain/schemas/Chapter");
const Verse = require("../../domain/schemas/Verse");
const bibleUtils = require("../../../utils/bibleUtils");

const seeder = {};

seeder.verseImporter = (bookName, chapterNo) => {
  Book.findOne({ title: bookName }, (err, book) => {
    if (err) {
      console.log(err);
    }
    else {
      Chapter.findOne({ book: book._id, chapterNo: chapterNo }).populate("verses").exec((err, chapter) => {

        if (err) {
          console.log(err)
        }
        else {
          let verses = bibleUtils.bibleArray(__dirname + "/genesis.json");
          let filteredVerses = verses.filter((stu) => { return stu.chapterNumber === chapterNo });
          const newVerses = [];
          filteredVerses.forEach(ele => {
            newVerses.push({
              verseNo: ele.verseNumber,
              text: ele.val,
              chapter: chapter._id
            });
          });
          Verse.create(newVerses, (err, verses) => {
            if (err) {
              console.log(err);
            }
            else {
              chapter.verses = [...verses];
              chapter.save();
              console.log(verses);
            }
          })
        }
      });
    }
  });
}

module.exports = seeder;