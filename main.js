/*function showContent() {
  element = document.getElementById("content");
  check = document.getElementById("check");
  if (check.checked) {
      element.style.display='block';
  }
  else {
      element.style.display='none';
  }
}*/

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

function increaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 1) + 'px';
}

function decreaseFontSizeBy1px() {
  txt = document.getElementById('b');
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 1) + 'px';
}