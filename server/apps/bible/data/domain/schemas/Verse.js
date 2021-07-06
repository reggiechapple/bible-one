const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verseSchema = new Schema({
  verseNo: { type: Number, required: true },
  text: { type: String, required: true },
  chapter: {
    type: Schema.Types.ObjectId,
    ref: 'Chapter'
  }
}, { timestamps: true });

const Verse = mongoose.model("Verse", verseSchema);

module.exports = Verse;