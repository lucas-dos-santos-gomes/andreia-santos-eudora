const emailInput = document.querySelectorAll("input[type=email]");

emailInput.forEach(input => {
  function testValid() {
    if (!input.validity.valid) {
      input.style.color = "transparent";
    }
  }
  function testFocus() {
    input.style.color = "#FFF";
  }
  input.onfocus = testFocus;
  input.onblur = testValid;
});