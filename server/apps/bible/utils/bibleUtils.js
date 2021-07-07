'use strict';

const fs = require('fs');
const Book = require("../data/domain/schemas/Book");

const bibleUtils = {};

bibleUtils.returnJsonFromFile = (file) => {
  let rawdata = fs.readFileSync(file);
  let json = JSON.parse(rawdata);

  return json;
};

bibleUtils.createJsonFile = (file, json) => {
  // let json = unformattedJson.filter((stu) => { return stu.value !== undefined });
  fs.writeFileSync(file, JSON.stringify(json, null, 2));
}

bibleUtils.bibleArray = (file, chapter) => {

  let json = bibleUtils.returnJsonFromFile(file);
  let elements = json.filter((stu) => { return stu.value !== undefined });

  let returnArray = [];

  elements.forEach(element => {
    let chapterNumber = element["chapterNumber"];
    let verseNumber = element["verseNumber"];
    let val = element["value"];

    returnArray.push({
      chapterNumber,
      verseNumber,
      val
    });
  });
  //console.log(returnArray.filter((stu) => { return stu.chapterNumber === 2 }));
  return returnArray;
};

//bibleUtils.bibleArray("../data/seeders/genesis/genesis.json");

module.exports = bibleUtils;