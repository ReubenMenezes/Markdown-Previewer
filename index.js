const editor = document.getElementById("editor");
const output = document.getElementById("preview");
window.addEventListener("DOMContentLoaded", () => {
  output.innerHTML = marked.parse(editor.value);
});

editor.addEventListener(
  "input",
  (e) => (output.innerHTML = marked.parse(e.target.value))
);
