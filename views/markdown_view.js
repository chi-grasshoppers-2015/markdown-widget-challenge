function View(renderArea) {
  this.renderArea = renderArea;
}

View.prototype.renderOutput = function(html) {
  $(this.renderArea).html(html);
}
