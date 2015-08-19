var content = new Markdown();
var view = new MarkdownView();

$(document).ready(function() {
  $('textarea').keyup(function() {
    view.clear();
    var rawData = $('textarea').val();
    var preview = content.transform(rawData);
    view.print(preview);
  })
})
