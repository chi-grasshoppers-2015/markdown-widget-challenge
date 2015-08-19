function MarkDownWidget(textArea, renderArea) {
  this.model = new Parser();
  this.view = new View(renderArea);
  $(textArea).on("input", this.handleInput.bind(this));
}

MarkDownWidget.prototype.handleInput = function(event) {
  event.preventDefault();
  var inputText = event.target.value;
  var outputText = this.model.parse(inputText)
  this.view.renderOutput(outputText);
}
