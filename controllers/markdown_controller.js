function Controller(model,view) {
  this.model = model;
  this.view = view;
}

Controller.prototype.handleInput = function(event) {
  event.preventDefault();
  var inputText = event.target.value;
  this.view.renderOutput(inputText);
}
