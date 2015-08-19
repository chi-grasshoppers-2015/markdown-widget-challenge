function Markdown() {
  //detect each line individually
  //check for markdown characters
  //transform markdown into html tags
  //return html


};

Markdown.prototype.transform = function(content) {


  html = markdown.toHTML(content)

  // var strings = content.split("\n");
  // for (var i = 0; i < strings.length; i++) {
  //   // var strings_row = strings[i].split(" ")
  //   // for (var j = 0; j < strings_row.length; j++) {
  //   //   var newText = this.wordTransform(strings_row[j])
  //   //   strings_row[j] = newText;
  //   // }
  //   // strings[i] = strings_row.join(" ");
  //   newText = this.rowTransform(strings[i]);
  //   strings[i] = newText;
  // };
  // return strings

  return html;
};

Markdown.prototype.rowTransform = function(rawRow) {

  var newRow = rawRow;

  while (newRow.match(/[*]{2}.+?[*]{2}/) != null) {
    var matchedWord = (/[*]{2}.+?[*]{2}/g).exec(newRow);
    var input = matchedWord.input
    var start_index = matchedWord.index + 2
    var end_index = matchedWord[0].length - 2 + start_index - 2
    var newRow = newRow.replace(matchedWord[0], "<strong>" + input.slice(start_index, end_index) + "</strong>")
  }

  while (newRow.match(/[*].+?[*]/) != null) {
    var matchedWord = (/[*].+?[*]/g).exec(newRow);
    var input = matchedWord.input
    var start_index = matchedWord.index + 1
    var end_index = matchedWord[0].length - 1  + start_index - 1
    var newRow = newRow.replace(matchedWord[0], "<em>" + input.slice(start_index, end_index) + "</em>")
  }

  while (newRow.match(/[_].+?[_]/) != null) {
    var matchedWord = (/[_].+?[_]/g).exec(newRow);
    var input = matchedWord.input
    var start_index = matchedWord.index + 1
    var end_index = matchedWord[0].length - 1 + start_index - 1
    var newRow = newRow.replace(matchedWord[0], "<em>" + input.slice(start_index, end_index) + "</em>")
  }

  return newRow
};
