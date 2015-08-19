function MarkdownView() {

};

MarkdownView.prototype.print = function(array) {
  for (var i = 0; i < array.length; i++) {
    $('.preview').append("<p>" + array[i] + "</p>");
  };
};

MarkdownView.prototype.clear = function() {
  $('.preview').empty();
};
