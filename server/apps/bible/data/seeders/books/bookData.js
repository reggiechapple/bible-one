const divisions = require("../../domain/dao/divisions");

const books = [
  {
    bookNo: 00,
    title: "Genesis",
    section: divisions.sections.old,
    genre: divisions.genres.pentateuch
  },
  {
    bookNo: 01,
    title: "Exodus",
    section: divisions.sections.old,
    genre: divisions.genres.pentateuch
  },
  {
    bookNo: 02,
    title: "Leviticus",
    section: divisions.sections.old,
    genre: divisions.genres.pentateuch
  },
  {
    bookNo: 03,
    title: "Numbers",
    section: divisions.sections.old,
    genre: divisions.genres.pentateuch
  },
  {
    bookNo: 04,
    title: "Deuteronomy",
    section: divisions.sections.old,
    genre: divisions.genres.pentateuch
  },
  {
    bookNo: 05,
    title: "Joshua",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 06,
    title: "Judges",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 07,
    title: "Ruth",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 08,
    title: "1 Samuel",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 09,
    title: "2 Samuel",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 10,
    title: "1 Kings",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 11,
    title: "2 Kings",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 12,
    title: "1 Chronicles",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 13,
    title: "2 Chronicles",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 14,
    title: "Ezra",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 15,
    title: "Nehemiah",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 16,
    title: "Esther",
    section: divisions.sections.old,
    genre: divisions.genres.historical
  },
  {
    bookNo: 17,
    title: "Job",
    section: divisions.sections.old,
    genre: divisions.genres.wisdom
  },
  {
    bookNo: 18,
    title: "Psalms",
    section: divisions.sections.old,
    genre: divisions.genres.wisdom
  },
  {
    bookNo: 19,
    title: "Proverbs",
    section: divisions.sections.old,
    genre: divisions.genres.wisdom
  },
  {
    bookNo: 20,
    title: "Ecclesiastes",
    section: divisions.sections.old,
    genre: divisions.genres.wisdom
  },
  {
    bookNo: 21,
    title: "Song of Solomon",
    section: divisions.sections.old,
    genre: divisions.genres.wisdom
  },
  {
    bookNo: 22,
    title: "Isaiah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 23,
    title: "Jeremiah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 24,
    title: "Lamentations",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 25,
    title: "Ezekiel",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 26,
    title: "Daniel",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 27,
    title: "Hosea",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 28,
    title: "Joel",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 29,
    title: "Amos",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 30,
    title: "Obadiah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 31,
    title: "Jonah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 32,
    title: "Micah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 33,
    title: "Nahum",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 34,
    title: "Habakkuk",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 35,
    title: "Zephaniah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 36,
    title: "Haggai",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 37,
    title: "Zechariah",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 38,
    title: "Malachi",
    section: divisions.sections.old,
    genre: divisions.genres.prophets
  },
  {
    bookNo: 39,
    title: "Tobit",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 40,
    title: "Esther (Greek)",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 41,
    title: "Wisdom of Solomon",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 42,
    title: "Sirach",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 43,
    title: "Baruch",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 44,
    title: "1 Maccabees",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 45,
    title: "2 Maccabees",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 46,
    title: "1 Esdras",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 47,
    title: "Prayer of Manasses",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 48,
    title: "Psalm 151",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 49,
    title: "3 Maccabees",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 50,
    title: "2 Esdras",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 51,
    title: "4 Maccabees",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 52,
    title: "Daniel (Greek)",
    section: divisions.sections.old,
    genre: divisions.genres.apocrypha
  },
  {
    bookNo: 53,
    title: "Matthew",
    section: divisions.sections.new,
    genre: divisions.genres.gospels
  },
  {
    bookNo: 54,
    title: "Mark",
    section: divisions.sections.new,
    genre: divisions.genres.gospels
  },
  {
    bookNo: 55,
    title: "Luke",
    section: divisions.sections.new,
    genre: divisions.genres.gospels
  },
  {
    bookNo: 56,
    title: "John",
    section: divisions.sections.new,
    genre: divisions.genres.gospels
  },
  {
    bookNo: 57,
    title: "Acts",
    section: divisions.sections.new,
    genre: divisions.genres.acts
  },
  {
    bookNo: 58,
    title: "Romans",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 59,
    title: "1 Corinthians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 60,
    title: "2 Corinthians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 61,
    title: "Galatians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 62,
    title: "Ephesians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles

  },
  {
    bookNo: 63,
    title: "Philippians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 64,
    title: "Colossians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 65,
    title: "1 Thessalonians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 66,
    title: "2 Thessalonians",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 67,
    title: "1 Timothy",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 68,
    title: "2 Timothy",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 69,
    title: "Titus",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 70,
    title: "Philemon",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 71,
    title: "Hebrews",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 72,
    title: "James",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 73,
    title: "1 Peter",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 74,
    title: "2 Peter",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 75,
    title: "1 John",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 76,
    title: "2 John",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 77,
    title: "3 John",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 78,
    title: "Jude",
    section: divisions.sections.new,
    genre: divisions.genres.epistles
  },
  {
    bookNo: 79,
    title: "Revelation",
    section: divisions.sections.new,
    genre: divisions.genres.apocalyptic
  },
];

module.exports = books;