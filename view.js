function MarkdownView() {

};

// MarkdownView.prototype.print = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     $('.preview').append("<p>" + array[i] + "</p>");
//   };
// };

MarkdownView.prototype.print = function(markedDownedContent) {
    $('.preview').append(markedDownedContent);
};


MarkdownView.prototype.clear = function() {
  $('.preview').empty();
};
