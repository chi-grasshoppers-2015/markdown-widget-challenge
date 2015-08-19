//** hello ** this is **weird isn't it**

function Parser(){
}

Parser.prototype.parse = function(text) {

  // markdown-js's parsing logic
  return markdown.toHTML(text);

  // our parsing logic
//   var outputText = text.replace(/(\s|\A|^|>)\*{2}(.+)\*{2}(\s|\z|$|<)/m, this.boldText);
//   outputText = outputText.replace(/(\s|\A|^|>)\*(.+)\*(\s|\z|$|<)/m, this.italicText);
//   outputText = outputText.replace(/(\s|\A|^|>)_(.+)_(\s|\z|$|<)/m, this.italicText);
//   console.log(outputText);
//   return outputText;
}

// Parser.prototype.boldText = function(match, separator1, boldString, separator2) {
//   return separator1 + "<span class='md-bold'>" + boldString + "</span>" + separator2;
// }

// Parser.prototype.italicText = function(match, separator1, italicString, separator2) {
//   return separator1 + "<span class='md-italic'>" + italicString + "</span>" + separator2;
// }

