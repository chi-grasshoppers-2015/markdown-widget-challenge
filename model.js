function Markdown() {
  //detect each line individually
  //check for markdown characters
  //transform markdown into html tags
  //return html


};

Markdown.prototype.transform = function(content) {

  var strings = content.split("\n");
  for (var i = 0; i < strings.length; i++) {
    // var strings_row = strings[i].split(" ")
    // for (var j = 0; j < strings_row.length; j++) {
    //   var newText = this.wordTransform(strings_row[j])
    //   strings_row[j] = newText;
    // }
    // strings[i] = strings_row.join(" ");
    newText = this.rowTransform(strings[i]);
    strings[i] = newText;
  };
  return strings
};

Markdown.prototype.rowTransform = function(rawRow) {
  if (rawRow.match(/[*]{2}.+?[*]{2}/) != null) {
    var matchedWord = (/[*]{2}.+?[*]{2}/g).exec(rawRow);
    var start_index = matchedWord.index + 2
    var end_index = matchedWord[0].length - 2
    var newRow = rawRow.replace(matchedWord[0], "<strong>" + matchedWord[0].slice(start_index, end_index) + "</strong>")
    return newRow
  }
  else if (rawRow.match(/[*].+?[*]/) != null) {
    var matchedWord = (/[*].+?[*]/g).exec(rawRow);
    var start_index = matchedWord.index + 1
    var end_index = matchedWord[0].length - 1
    var newRow = rawRow.replace(matchedWord[0], "<em>" + matchedWord[0].slice(start_index, end_index) + "</em>")
  }
  else if (rawRow.match(/[_].+?[_]/) != null) {
    var matchedWord = (/[_].+?[_]/g).exec(rawRow);
    var start_index = matchedWord.index + 1
    var end_index = matchedWord[0].length - 1
    var newRow = rawRow.replace(matchedWord[0], "<em>" + matchedWord[0].slice(start_index, end_index) + "</em>")
  }
  else {
    return rawRow
  }
};
