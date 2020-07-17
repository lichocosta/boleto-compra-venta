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

