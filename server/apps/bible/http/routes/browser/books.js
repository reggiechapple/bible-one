const router = require("express").Router();
const Book = require("../../../data/domain/schemas/Book");
const Chapter = require("../../../data/domain/schemas/Chapter");
const Verse = require("../../../data/domain/schemas/Verse");

router.get("/books", (req, res) => {
  Book.find({}).sort({bookNo: 1}).exec((err, books) => {

    if (err) {
      console.log(err);
    }
    else {
      res.render("books/index", {books});
    }
  });
});

router.get("/books/:id", (req, res) => {
  Book.findById(req.params.id).populate("chapters").exec((err, book) => {

    if (err) {
      console.log(err);
    }
    else {
      res.render("books/details", {book});
    }
  });
});

router.post("/books/:id/new-chapter", (req, res) => {

  if (req.body.chapterNo) {
    Book.findById(req.params.id).exec((err, book) => {

      if (err) {
        console.log(err);
      }
      else {
        let newChapter = {
          chapterNo: req.body.chapterNo,
          book: book._id
        };
        Chapter.create(newChapter, (err, chapter) => {
          if (err) {
            console.log(err);
            res.redirect("back");
          }
          else {
            book.chapters.push(chapter);
            book.save();

            res.redirect("back");
          }
        });
      }
    });
  }
  else {
    res.redirect("/");
  }

});

router.get("/books/:id/chapter/:chapterNo", (req, res) => {
  Chapter
    .findOne({ book: req.params.id, chapterNo: req.params.chapterNo })
    .populate("book")
    .populate("verses")
    .exec((err, chapter) => {
      if (err) {
        console.log(err);
      }
      else {
        res.render("books/chapter", {chapter})
      }
    });
});

router.post("/chapters/:id/new-verse", (req, res) => {
  if (req.body.verseNo && req.body.text) {

    Chapter.findById(req.params.id, (err, chapter) => {

      if (err) {
        console.log(err);
      }
      else {
        let newVerse = {
          verseNo: req.body.verseNo,
          text: req.body.text,
          chapter: chapter._id
        };

        Verse.create(newVerse, (err, verse) => {
          if (err) {
            console.log(err);
            res.redirect("/");
          }
          else {
            chapter.verses.push(verse);
            chapter.save();
            res.redirect("back");
          }
        })
      }
    });
  }
  else {
    res.redirect("/")
  }
});

module.exports = router;