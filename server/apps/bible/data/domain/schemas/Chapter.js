const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  chapterNo: { type: Number, required: true },
  verses: [{
    type: Schema.Types.ObjectId,
    ref: 'Verse'
  }],
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }
}, { timestamps: true });

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;