function Parser(){
}

Parser.prototype.parse = function(text) {
  // parsing logic
  var outputText = text.replace(/\*\*(\w+)\*\*/, this.boldText);
  console.log(outputText);
  return outputText;
}

Parser.prototype.boldText = function(match, boldString) {
  return "<span class='md-bold'>" + boldString + "</span>";
}
