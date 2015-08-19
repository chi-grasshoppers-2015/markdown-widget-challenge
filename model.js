function bold(string) {
  return string.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
}

function italicAsterisk(string) {
  return string.replace(/\*(.*?)\*/g, "<i>$1</i>");
}

function italicUnderscore(string) {
  return string.replace(/_(.*?)_/g, "<i>$1</i>");
}

function renderMD(string) {
  return italicAsterisk(italicUnderscore(bold(string)));
}
