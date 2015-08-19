var readInput = function(event){
  var text = $("#user_input").val();
  var newText = translateText(text);
  return newText;
}


var translateText = function(text){
  var bold = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  var italics = bold.replace(/\*(.*?)\*/g, "<em>$1</em>")
  var italicss = italics.replace(/_(.*?)_/g, "<em>$1</em>")
  var finalText = italicss.replace(/\n/g, "<br>");
  return finalText
};
