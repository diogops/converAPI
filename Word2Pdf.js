'use strict'

var convertapi = require('convertapi')('NqkbbLitFa0weIEK');

class Word2Pdf {

  async handler(fileIn, fileOut) {
    await convertapi.convert('pdf', {
        File: fileIn
      })
      .then(function (result) {
        // get converted file url
        console.log("Converted file url: " + result.file.url);

        // save to file
        return result.file.save(fileOut);
      })
      .then(function (file) {
        console.log("File saved: " + file);
      })
      .catch(function (e) {
        console.error(e.toString());
      });
  }

}


module.exports = Word2Pdf
