function Markdown() {
  //detect each line individually
  //check for markdown characters
  //transform markdown into html tags
  //return html


};

Markdown.prototype.transform = function(content) {

  var strings = content.split("\n");
  for (var i = 0; i < strings.length; i++) {
    var strings_row = strings[i].split(" ")
    for (var j = 0; j < strings_row.length; j++) {
      var newText = this.wordTransform(strings_row[j])
      strings_row[j] = newText;
    }
    strings[i] = strings_row.join(" ");
  };
  return strings
};

Markdown.prototype.wordTransform = function(rawWord) {
  if (rawWord.match(/[*].*[*]/) != null) {
    var newWord = rawWord.replace(/[*]/g, "");
    return "<em>" + newWord + "</em>"
  }
  else {
    return rawWord
  }
};
