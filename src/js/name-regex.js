export default function regex(e) {
  if(!checkChar(e)) {
    e.preventDefault();
  }
}

function checkChar(e) {
  var char = String.fromCharCode(e.keyCode);
  var pattern = '[a-z, A-Z]';
  if (char.match(pattern)) {
    return true;
  }
}