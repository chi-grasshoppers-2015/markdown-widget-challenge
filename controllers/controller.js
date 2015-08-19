$( document ).ready(function(){
  $("#source").on ("keyup", analyze)
});

var analyze = function(){

  var text = function(){
     preview.innerHTML = markdown.toHTML(user_input.value);
  };
  // var text = readInput
  output(text)
}



