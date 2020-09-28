/*MOSTRAR DIV*/
function showContent(checkboxId, divId) {
  const div = document.getElementById(divId)
  const checkbox = document.getElementById(checkboxId)
  if (checkbox.checked) {
    div.style.display = 'block'
  }
  else {
    div.style.display = 'none'
  }
}

/*AUMENTAR*/
function increaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 1) + 'px';
}

/*DISMINUIR*/
function decreaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 1) + 'px';
}