const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  bookNo: { type: Number, required: true },
  section: { type: String, enum: ['Old Testaments', 'New Testaments'], required: true },
  genre: { 
    type: String, 
    enum: [
      'The Pentateuch', 
      'Historical Books', 
      'Wisdom Literature',
      'The Prophets',
      'The Apocrypha',
      'The Gospels',
      'Acts of the Apostles',
      'Epistles',
      'Apocalyptic'
    ], 
    required: true 
  },
  chapters: [{
    type: Schema.Types.ObjectId,
    ref: 'Chapter'
  }]
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;